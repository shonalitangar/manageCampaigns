import React from 'react';
import CampaignList from './CampaignList';
import "./App.css";

class App  extends React.Component {

    state = {
        selected : "past",
        past: {
            data : [{
                id: 1,
                date: "2017-05-01",
                campaign: "Whatsapp",
                view: "viewPending",
                action: "Schedule Again"
            },
            {
                id: 2,
                date: "2016-05-01",
                campaign: "Whatsapp",
                view: "viewPending",
                action: "Schedule Again"
            },
            {
                id: 3,
                date: "2015-05-01",
                campaign: "Whatsapp",
                view: "viewPending",
                action: "Schedule Again"
            },
            {
                id: 4,
                date: "2015-05-01",
                campaign: "Whatsapp",
                view: "viewPending",
                action: "Schedule Again"
            }]
        },
        live: {
            data : [{
                id: 1,
                date: "2019-10-27",
                campaign: "Whatsapp",
                view: "viewLive",
                action: "Schedule Again"
            },
            {
                id: 2,
                date: "2019-10-27",
                campaign: "Whatsapp",
                view: "viewLive",
                action: "Schedule Again"
            },
            {
                id: 3,
                date: "2019-10-27",
                campaign: "Whatsapp",
                view: "viewLive",
                action: "Schedule Again"
            },
            {
                id: 4,
                date: "2019-10-27",
                campaign: "Whatsapp",
                view: "viewLive",
                action: "Schedule Again"
            }]
        },
        upcoming: {
            data : [{
                id: 1,
                date: "2020-05-01",
                campaign: "Whatsapp",
                view: "viewUpcoming",
                action: "Schedule Again"
            },
            {
                id: 2,
                date: "2021-05-01",
                campaign: "Whatsapp",
                view: "viewUpcoming",
                action: "Schedule Again"
            },
            {
                id: 3,
                date: "2022-05-01",
                campaign: "Whatsapp",
                view: "viewUpcoming",
                action: "Schedule Again"
            },
            {
                id: 4,
                date: "2019-12-01",
                campaign: "Whatsapp",
                view: "viewUpcoming",
                action: "Schedule Again"
            }]
        }
    }

    changeStateToReq = (event) => {
        let text = event.target.innerText;
        if(text === "LIVE CAMPAIGNS") {
            this.setState({selected: "live"});
        } else if (text === "UPCOMING CAMPAIGNS") {
            this.setState({selected: "upcoming"});
        } else if (text === "PAST CAMPAIGNS"){
            this.setState({selected: "past"});
        }
    }

    render(){
        return (<div className="ui-container m-t-10">
                    <h1 class="center"><span class="lighter-font">Manage</span> Campaigns</h1>
                    <div class="align-center">
                        <div class="ui button" tabindex="0" onClick={this.changeStateToReq}>
                          <div class="visible content">UPCOMING CAMPAIGNS</div>
                        </div>
                        <div class="ui button" tabindex="0" onClick={this.changeStateToReq}>
                          <div class="visible content">LIVE CAMPAIGNS</div>
                        </div>
                        <div class="ui button" tabindex="0" onClick={this.changeStateToReq}>
                          <div class="visible content">PAST CAMPAIGNS</div>
                        </div>
                    </div>
                    <div class="contain"><CampaignList campaigns= {this.state[this.state.selected]} selected ={this.state.selected}/></div>
                </div>);
    }
        
}

export default App;