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
                  showAllPop: false,
                  showAllPsycadelic: false,
                  showAllProg: false,
                  showAllOther: false 
                  })
  }

  handleOnClickPsycadelic = () => {
    this.setState({
                  showAllPsycadelic: this.context.displayAllPop(),
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
                  { label: "All Albums", onClick: () => {} },
                  { label: "Rock", onClick: () => {} },
                  { label: "Soul", onClick: () => {} },
                  { label: "Pop", onClick: () => {} },
                  { label: "Psycadelic", onClick: () => {} },
                  { label: "Prog", onClick: () => {} },
                  { label: "Other", onClick: () => {} },
                ]}
              />
            </Box>
            <h1>Rock</h1>
            <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {this.context.displayAllRock()}
            </Box>
            <h1>Soul</h1>
            <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {this.context.displayAllSoul()}
            </Box>
            <h1>Pop</h1>
            <Box
              justify="center"
              align="center"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {this.context.displayAllPop()}
            </Box>  
          </Box>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

export default MainPage;
