import { Component } from "react";
import Loader from "./Spinner";
import Members from "./Members";
import "../css/common.css";
import "../css/styles.css";
export default class Organizations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            loadingMember:true,
            data: [],
            members: [],
            organizationName: ''
        };
    }
    async componentDidMount() {
        const response = await fetch("http://localhost:5000/auth/github/orgs", {
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

        this.setState({ loading: false, data: data });
    }
    async fetchMembers(e, orgName){
        Array.from(document.getElementsByClassName("org-list-wrap")).map(el => el.classList.remove("selected"));
        e.target.classList.add('selected');
        const response = await fetch(`http://localhost:5000/auth/github/orgs/${orgName}/members`, {
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
        this.setState({ loadingMember: false, members: data, organizationName: orgName });
      }
    render() {
        const {
            loading,
            data,
            members,
            loadingMember, 
            organizationName
        } = this.state;
        if (loading) return <Loader />;
        return <>
            <div className="table-column">
            <h3>Organisation</h3>
            <div className="org-list-holder">
                <ul className="org-list-wrap">
                    {data.map((item, i) => (
                        <li className="org-list-wrap" key={i} onClick={(e) => {
                            this.fetchMembers(e, item['login']);
                        }}>
                            {/* <img src={item.avatar_url} alt="" className="img" /> */}
                            {item['login'].toLocaleUpperCase()}
                        </li>

                    ))}
                </ul>
                </div>
            </div>
            <Members data = {members} loading={loadingMember} organizationName = {organizationName} />
        </>
    }
}