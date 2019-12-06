import React from 'react'
import LoLLogin from './LoLLogin'
import ChampionPage from './champion/ChampionPage'
import ItemPage from './items/ItemPage'
import PlayerPage from './player/PlayerPage'
import SkinPage from './skin/SkinPage'
import SpoilPage from './spoil/SpoilPage'

class LoLPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {logged : false, actualPage : ""}
    }

    linksPage = (
        <div>
            <a href="#" onClick={this.handleClick("champion")}>Campeões</a>
            <a href="#" onClick={this.handleClick("item")}>Itens</a>
            <a href="#" onClick={this.handleClick("player")}>Jogadores</a>
            <a href="#" onClick={this.handleClick("skin")}>Skins</a>
            <a href="#" onClick={this.handleClick("spoil")}>Espólios</a>
        </div>
    )

    handleClick = (click)=>{
        switch(click){
            case "champion":
                return <ChampionPage/>
            case "item":
                return <ItemPage/>
            case "player":
                return <PlayerPage/>
            case "skin":
                return <SkinPage/>
            case "spoil":
                return <SpoilPage/>
            default:
                return null
        }
    }

    render(){
        var pageRender = this.state.logged?()=>{
            return <this.linksPage/>
        }:()=>{
            return <LoLLogin/>
        }

        return <div>
            {pageRender}
        </div>
    }
}

export default LoLPage