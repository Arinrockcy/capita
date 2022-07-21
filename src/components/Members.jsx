import { PureComponent } from "react";
import Repos from './Repos'
import Loader from "./Spinner";
export default class Members extends PureComponent {
    constructor(props) {
        super(props);
        this.Members = new Set();
        this.state = {
            loading: true,
            data: [],
            organizationName:'',
            repos:[],
            repoLoading: false
        };
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ ...nextProps});  
    }

    async fetchRepos(e, user, refName){
        this.refs[refName].setAttribute('checked', true);
        this.Members.add(this.state.data.find(item => item['login'] === refName));
        console.log(this.Members);
        const response = await fetch(`http://localhost:5000/auth/github/users/${user}/repos`, {
          method: "GET",
          credentials: "include",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        });
    
        if (response.status >= 300) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        this.setState({
            repos: data, repoLoading:false 
        });
      }
    render() {
        const {
            loading,
            data,
            organizationName,
            repos,
            repoLoading
        } = this.state;
        if (loading) return <Loader />;
        return <>
            <div className="table-column">
                <h3>Members</h3>
                <div className="members-list-holder">
                    <ul className="members-list-wrap">
                        {data.map((item, i) => (
                            <li key={i} onClick={(e) => {
                                this.fetchRepos(e, organizationName, item['login']);
                            }}>
                                <div className="github-avtar">
                                    <img src={item.avatar_url} alt="" className="img" />
                                </div>
                                <p>{item['login'].toLocaleUpperCase()}</p>
                                <div>
                                    <input type="checkbox" value={item['login']} ref={item['login']} />
                                </div>
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
            <Repos 
            data = {repos} 
            loading={repoLoading} 
            organizationName = {organizationName} 
            Members = {this.Members}
            />
        </>
    }
}