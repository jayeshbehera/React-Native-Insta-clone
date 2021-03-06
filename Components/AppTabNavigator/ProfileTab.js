import React, {Component} from 'react';
import { StyleSheet, Text, View ,Image, Dimensions } from 'react-native';
import {Icon , Container , Content , Header, Thumbnail,Left,Right, Body, Button} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo'
import CardComponenet from '../CardComponenet';
var  images = [
    require('../../Img/Posts/1.jpg'),
    require('../../Img/Posts/2.jpg'),
    require('../../Img/Posts/3.jpg'),
    require('../../Img/Posts/4.jpg'),
    require('../../Img/Posts/5.jpg'),
    require('../../Img/Posts/6.jpg'),
    require('../../Img/Posts/7.jpg'),
    require('../../Img/Posts/8.jpg'),
    require('../../Img/Posts/9.jpg'),
    require('../../Img/Posts/10.jpg'),
    require('../../Img/Posts/11.jpg'),
    require('../../Img/Posts/12.jpg'),
]

var {width,height} = Dimensions.get('window')
export default class ProfileTab extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor})=>(
            <Icon name="person" style={{color: tintColor}}/>
        )
    }
    constructor(props){
        super(props)
        this.state ={
            activeIndex: 0
        }
    }

    segmentClicked = (index)=>{
        this.setState({
            activeIndex: index
        })
    }
    
    renderSectionOne =() => {
        return images.map((image, index) => {
            return(
                <View key={index} style={[{width : (width)/3}, {height: (width)/3},{marginBottom: 2}, index%3!==0? {paddingLeft: 2}: {paddingLeft: 0}]}>
                    <Image style={{ flex: 1, width: undefined, height: undefined}} source={image}/>
                </View>
            )
        })

    }
    renderSection =() =>{
        if(this.state.activeIndex == 0){
            return(
                <View style={{ flexDirection: 'row' ,flexWrap: 'wrap'}}>
                    {this.renderSectionOne()}
                </View>
            )
        }
        else if(this.state.activeIndex == 1){
            return(
                <View>
                    <CardComponenet imagesSource="1" likes="1.1 M"/> 
                    <CardComponenet imagesSource="2" likes="2.5 M"/> 
                    <CardComponenet imagesSource="3" likes="3.6 M"/> 
                </View>
            )
        }
    }
  render() {
    return (
        <Container style={styles.container}>
                      <Header style={{paddingTop: 25, backgroundColor: '#fff'}}>
                              <Left><Icon name="person-add" style={{paddingLeft: 10}} /></Left>
                              <Body><Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}> Rishabh_Yadav </Text></Body>
                              <Right><EntypoIcon name="back-in-time" style={{paddingRight: 10 , fontSize: 32}} /></Right>
                      </Header>
                      <Content>
                          <View style={{paddingTop: 10}}>
                              <View style={{flexDirection: 'row'}}>
                                  <View style={{flex: 1,paddingLeft: 5, paddingTop: 5, alignItems: 'center'}}>
                                        <Image source={require('../../Img/Rishabh.jpg')} 
                                            style={{width: 75, height: 75, borderRadius: 37.5}}/>
                                  </View>
                                  <View style={{ flex: 3 ,paddingTop: 5}}>
                                        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                                            <View style={{alignItems: 'center'}}>
                                                <Text style={{fontWeight: 'bold',fontSize: 15}}>20</Text>
                                                <Text style={{ fontSize: 10, color: 'grey'}}>Posts</Text>
                                            </View>
                                            <View style={{alignItems: 'center'}}>
                                                <Text style={{fontWeight: 'bold',fontSize: 15}}>10M</Text>
                                                <Text style={{ fontSize: 10, color: 'grey'}}>followers</Text>
                                            </View>
                                            <View style={{alignItems: 'center'}}>
                                                <Text style={{fontWeight: 'bold',fontSize: 15}}>50</Text>
                                                <Text style={{ fontSize: 10, color: 'grey'}}>following</Text>
                                            </View>
                                        </View>
                                        <View style={{flexDirection: 'row'}}>
                                            <Button bordered dark style={{flex: 3, marginLeft: 10, justifyContent: 'center', height: 30}}>
                                                 <Text>Edit Profile</Text>
                                            </Button>
                                            <Button bordered dark style={{ flex: 1, height: 30, marginRight: 10, marginLeft: 5, justifyContent: 'center'}}>
                                                 <Icon name="settings"/>   
                                            </Button>
                                        </View>
                                  </View>
                              </View>
                              <View style={{paddingBottom: 10, paddingHorizontal: 15, paddingVertical: 15}}>
                                 <Text style={{fontWeight: 'bold'}}>Rishabh Yadav</Text>
                                 <Text>Reactjs | ReactNative | Developer</Text>
                                 <Text>https://github.com/yrishabh</Text>
                              </View>
                          </View>
                          <View>
                              <View style={{flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5'}}>
                                  <Button transparent 
                                  onPress={()=> this.segmentClicked(0)}
                                  active={this.state.activeIndex ==0}
                                  > 
                                      <Icon name="apps" style={[this.state.activeIndex==0 ? {} : {color: 'grey'}]} />
                                  </Button>
                                  <Button transparent
                                  onPress={()=> this.segmentClicked(1)}
                                  active={this.state.activeIndex ==1}
                                  > 
                                      <Icon name="list" style={[this.state.activeIndex==1 ? {} : {color: 'grey'}]} />
                                  </Button>
                                  <Button transparent
                                  onPress={()=> this.segmentClicked(2)}
                                  active={this.state.activeIndex ==2}
                                  > 
                                      <Icon name="people" style={[this.state.activeIndex==2 ? {} : {color: 'grey'}]} />
                                  </Button>
                                  <Button transparent
                                  onPress={()=> this.segmentClicked(3)}
                                  active={this.state.activeIndex ==3}
                                  > 
                                      <Icon name="bookmark" style={[this.state.activeIndex==3 ? {} : {color: 'grey'}]} />
                                  </Button>
                              </View>
                              {this.renderSection()}
                          </View>
                      </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
