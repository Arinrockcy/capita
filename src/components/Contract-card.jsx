import { Component } from "react";

export default class ContractCard extends Component {
    constructor() {
        super();
    }

    render() {
        return <div className="contract-card-container">
        <div className="contract-details-wrap">
            <div className="contract-heading-bar-holder">
                <div className="contract-name-token">
                    <h2>Chained-Simplex</h2>
                    <div className="token-info">
                        simchain <div className="token-symbol-block">SCH</div>
                    </div>
                </div>
                <div className="contract-status-date">
                    <div className="contract-status">Active</div>
                    <div className="contract-created-at-wrap">
                        <span className="date-label">Created at</span>
                        <span className="date-info">12 July 2022, 9:58 PM (IST)</span>
                    </div>
                </div>
            </div>
            <div className="contract-github-info-wrap">
                <div className="org-data block-data-line">
                    <div className="block-label">Organisation</div>
                    <div className="block-value">open_cave</div>
                </div>
                <div className="repo-data block-data-line">
                    <div className="block-label">Repository</div>
                    <div className="block-value">Simplex</div>
                </div>
            </div>
            <div className="contract-members-info-holder">
                <div className="member-data block-data-line">
                    <div className="block-label">Members</div>
                    <div className="block-value">
                        <div className="btn-block">
                            <div className="btn-text-wrap btn-outline">
                                <span>Allot Tokens</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contract-members-list">
                    <ul>
                        <li>
                            <div className="github-avtar">
                                <img src="img/blank-face-male.png" alt="github-avtar"/>
                            </div>
                            <p>John.Smith</p>
                            <div>
                                <input type="text"/>
                            </div>
                        </li>
                        <li>
                            <div className="github-avtar">
                                <img src="img/blank-face-male.png" alt="github-avtar"/>
                            </div>
                            <p>Crazy_dev</p>
                            <div>
                                <input type="text"/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="contract-tokens-deatils-wrap">
            <h3>Disbursement Details</h3>
            <div className="contract-disbursement-record-table-wrap">
                <table>
                    <tbody><tr><th>
                        </th><td>Date &amp; Time</td>
                        <td>Tokens Disbursed</td>
                    
                    </tr><tr>
                        <td>12 May 2022</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <td>12 May 2022</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <td>12 May 2022</td>
                        <td>2000</td>
                    </tr>
                </tbody></table>
            </div>
            <div className="contract-disbursement-action-holder">
                <div className="balance-data block-data-line">
                    <div className="block-label">Balance</div>
                    <div className="block-value">50000</div>
                </div>
                <div className="btn-block">
                    <div className="btn-text-wrap btn-outline">
                        <span>Disburse Tokens</span>
                    </div>
                </div>
            </div>
        </div>
    </div>;
    }
}