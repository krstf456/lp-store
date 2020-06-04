import React from "react";
import Context from "../context/context";
import { Box, ResponsiveContext, Menu } from "grommet";

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      showAllAlbums: false,
      showAllRock: false,
      showAllSoul: false,
      showAllPop: false,
      showAllPsycadelic: false,
      showAllProg: false,
      showAllOther: false
    }
  }
  //This will enable the use of context-functions and states
  static contextType = Context;

  componentDidMount = () => {
    this.context.getAllAlbums();
    this.context.getAllRock();
    this.context.getAllSoul();
    this.context.getAllPop();
    //this.context.getAllPsycadelic();
    //this.context.getAllProg();
    //this.context.getAllOther();
  };

  handleOnClickAll = () => {
    this.setState({
                  showAllAlbums: this.context.displayAllAlbums(),
                  showAllRock: false,
                  showAllSoul: false,
                  showAllPop: false,
                  showAllPsycadelic: false,
                  showAllProg: false,
                  showAllOther: false 
                  })
  }

  handleOnClickRock = () => {
    this.setState({
                  showAllRock: this.context.displayAllRock(),
                  showAllAlbums: false,
                  showAllSoul: false,
                  showAllPop: false,
                  showAllPsycadelic: false,
                  showAllProg: false,
                  showAllOther: false 
                  })
  }

  handleOnClickSoul = () => {
    this.setState({
                  showAllSoul: this.context.displayAllSoul(),
                  showAllRock: false,
                  showAllAlbums: false,
                  showAllPop: false,
                  showAllPsycadelic: false,
                  showAllProg: false,
                  showAllOther: false 
                  })
  }

  handleOnClickPop = () => {
    this.setState({
                  showAllPop: this.context.displayAllPop(),
                  showAllRock: false,
                  showAllSoul: false,
                  showAllAlbums: false,
                  showAllPsycadelic: false,
                  showAllProg: false,
                  showAllOther: false 
                  })
  }

  handleOnClickPsycadelic = () => {
    this.setState({
                  showAllPsycadelic: this.context.displayAllPsycadelic(),
                  showAllRock: false,
                  showAllSoul: false,
                  showAllAlbums: false,
                  showAllProg: false,
                  showAllOther: false,
                  showAllPop: false, 
                  })
  }

  handleOnClickProg = () => {
    this.setState({
                  showAllProg: this.context.displayAllPop(),
                  showAllRock: false,
                  showAllSoul: false,
                  showAllAlbums: false,
                  showAllPop: false, 
                  showAllPsycadelic: false,
                  showAllOther: false 
                  })
  }

  handleOnClickOther = () => {
    this.setState({
                  showAllOther: this.context.displayAllPop(),
                  showAllRock: false,
                  showAllSoul: false,
                  showAllAlbums: false,
                  showAllPsycadelic: false,
                  showAllProg: false, 
                  showAllPop: false,
                  })
  }

  render() {
    return (
      <ResponsiveContext.Consumer>
        {(size) => (
          <Box>
            <Box align="center" pad="xlarge">
              <Menu
                dropProps={{
                  align: { top: "bottom", left: "left" },
                  elevation: "xlarge"
                }}
                label="Genre"
                items={[
                  { label: "All Albums", onClick: () => {this.handleOnClickAll()} },
                  { label: "Rock", onClick: () => {this.handleOnClickRock()} },
                  { label: "Soul", onClick: () => {this.handleOnClickSoul()} },
                  { label: "Pop", onClick: () => {this.handleOnClickPop()} },
                  { label: "Psycadelic", onClick: () => {this.handleOnClickPsycadelic()} },
                  { label: "Prog", onClick: () => {this.handleOnClickProg()} },
                  { label: "Other", onClick: () => {this.handleOnClickOther()} },
                ]}
              />
            </Box>
            
            <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {this.state.showAllAlbums}
            </Box>
            <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {this.state.showAllRock}
            </Box>
            <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {this.state.showAllSoul}
            </Box>
            <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {this.state.showAllPop}
            </Box>
            <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {this.state.showAllPsycadelic}
            </Box> 
            <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {this.state.showAllProg}
            </Box>   
            <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {this.state.showAllOther}
            </Box>    
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default MainPage;
