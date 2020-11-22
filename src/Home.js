import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Item,
  Constants,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Card,
  AppRegistry,
  AsyncStorage,Alert,
  TouchableHighlight
} from 'react-native';

import {Header, Title, Body} from 'native-base';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotDealsData:[
{"title":"OnePlus 8T-5G",
"price":"₹42,999",
"from":"Aamzon",
"image":"https://images-na.ssl-images-amazon.com/images/I/71UqqpGVheL._SL1500_.jpg",
"link":"https://www.amazon.in/gp/product/B085J17VVP/ref=s9_acss_bw_sc_x_ah_s1_f_w?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-3&pf_rd_r=QD7AD6NMVQV7299FGSWW&pf_rd_t=101&pf_rd_p=ab3d4fbb-62d1-458c-a002-fee02d64a439&pf_rd_i=1389401031"},

{"title":"Queen & Bee – 45% -70% Dark Chocolate Combo Pack of 3 (Blueberry, Café Mocha, Himalayan Pink Salt) (Gluten Free) (80gm x 3 =240g) (Diwali Gift Pack)",
"price":"₹547",
"from":"Aamzon",
"image":"https://images-na.ssl-images-amazon.com/images/I/71RAeoqegJL._SL1200_.jpg",
"link":"https://www.amazon.in/Queen-Bee-Chocolate-Blueberry-Himalayan/dp/B08KFSL1Y4?pd_rd_w=XXRL9&pf_rd_p=e27ac760-5038-4cb6-89cc-8eb74101f4d9&pf_rd_r=XFERPD4NFYYPT0ZSWSE4&pd_rd_r=2d652da5-74c9-4b74-98e8-92e57becf604&pd_rd_wg=auxoE"},

{"title":"LG 108cm (43 inch) Full HD LED Smart TV 2020 Edition  (43LM5650PTA)",
"price":"₹28,999",
"from":"Flipkart",
"image":"https://rukminim1.flixcart.com/image/416/416/ked56kw0/television/r/m/a/lg-43lm5650pta-43lm5650pta-original-imafvfqyfwgehxp9.jpeg?q=70",
"link":"https://www.flipkart.com/lg-108cm-43-inch-full-hd-led-smart-tv-2020/p/itmae361ec0f950d?pid=TVSFUJ5RVDUQZRMA&lid=LSTTVSFUJ5RVDUQZRMASECZD2&marketplace=FLIPKART&srno=b_1_2&otracker=dynamic_omu_infinite_Top%2BOffers_1_1.dealCard.OMU_INFINITE_E9NAOVHPSG1Q&fm=neo%2Fmerchandising&iid=44728ea6-c7a3-43bd-98f2-b3decb543ccf.TVSFUJ5RVDUQZRMA.SEARCH&ppt=browse&ppn=browse&ssid=vwseiqugw00000001605260650992"},

{"title":"Samsung Galaxy M21 (Midnight Blue, 4GB RAM, 64GB Storage)",
"price":"₹13,999.00",
"from":"Amazon",
"image":"https://images-na.ssl-images-amazon.com/images/I/61gQ5dO4b1L._SL1200_.jpg",
"link":"https://www.amazon.in/Samsung-Galaxy-Midnight-Blue-Storage/dp/B07HGJJ559/ref=lp_21505777031_1_1?s=electronics&ie=UTF8&qid=1605886848&sr=1-1"},

{"title":"Motorola Revou 108cm (43 inch) Ultra HD (4K) LED Smart Android TV with Dolby Atmos and Dolby Vision  (43SAUHDMG)",
"price":"₹31,999",
"from":"Flipkart",
"image":"https://rukminim1.flixcart.com/image/416/416/kfzq8i80/television/c/s/h/motorola-43sauhdmg-original-imafwc56xph9zduu.jpeg?q=70",
"link":"https://www.flipkart.com/motorola-revou-108cm-43-inch-ultra-hd-4k-led-smart-android-tv-dolby-atmos-vision/p/itm88e4927366cce?pid=TVSFSEHNC2EXFCSH&lid=LSTTVSFSEHNC2EXFCSHHASBAK&marketplace=FLIPKART&fm=personalisedRecommendation%2Fp2p-same&iid=R%3As%3Bp%3ATVSFUJ5RVDUQZRMA%3Bpt%3Ahp%3Buid%3A866912b5-2b46-11eb-8c0a-8b750db00ce4%3B.TVSFSEHNC2EXFCSH.LSTTVSFSEHNC2EXFCSHHASBAK&ppt=hp&ppn=homepage&ssid=tpbjy4t6v40000001605886746136&otracker=hp_reco_Recommended%2BItems_1_15.productCard.PMU_V2_Motorola%2BRevou%2B108cm%2B%252843%2Binch%2529%2BUltra%2BHD%2B%25284K%2529%2BLED%2BSmart%2BAndroid%2BTV%2B%2Bwith%2BDolby%2BAtmos%2Band%2BDolby%2BVision_TVSFSEHNC2EXFCSH.LSTTVSFSEHNC2EXFCSHHASBAK_personalisedRecommendation%2Fp2p-same_0&otracker1=hp_reco_WHITELISTED_personalisedRecommendation%2Fp2p-same_Recommended%2BItems_DESKTOP_HORIZONTAL_productCard_cc_1_NA_view-all&cid=TVSFSEHNC2EXFCSH.LSTTVSFSEHNC2EXFCSHHASBAK"},

{"title":"Realme 7 (Mist Blue, 64 GB)  (6 GB RAM)",
"price":"₹14,999",
"from":"Flipkart",
"image":"https://rukminim1.flixcart.com/image/416/416/keiuxzk0/mobile/z/h/3/realme-7-rmx2151-original-imafv7fzhnxkmdhx.jpeg?q=70",
"link":"https://www.flipkart.com/realme-7-mist-blue-64-gb/p/itme55d08631f19b?pid=MOBFUYUNMB7CUZH3&lid=LSTMOBFUYUNMB7CUZH3BM6FCX&marketplace=FLIPKART&srno=b_1_1&otracker=hp_bannerads_1_2.bannerAdCard.BANNERADS_Cat_Mob_HPW1-RM7_WFC4XMSJXYF4&fm=personalisedRecommendation%2Fp2p-same&iid=48287bb9-280f-4b5a-9cf3-99779c4d6d35.MOBFUYUNMB7CUZH3.SEARCH&ppt=browse&ppn=browse&ssid=cbbuf9l44g0000001605887193748"},

{"title":"realme Buds Classic Wired Earphones with HD Microphone Black",
"price":"₹399.00",
"from":"Aamzon",
"image":"https://images-na.ssl-images-amazon.com/images/I/7123d26rFxL._SL1500_.jpg",
"link":"https://www.amazon.in/dp/B08G28Z33M?pf_rd_r=2YKEGGC3A0VX527GMZ05&pf_rd_p=0e4d89fc-5e4b-47d8-bc9d-b45f7c29792f"},

{"title":"New Apple iPhone 12 (64GB) - Black",
"price":"₹79,999",
"from":"Amazon",
"image":"https://images-na.ssl-images-amazon.com/images/I/71fVoqRC0wL._SL1500_.jpg",
"link":"https://www.amazon.in/New-Apple-iPhone-12-64GB/dp/B08L5T3S7T/ref=sr_1_1_sspa?crid=12N2CNQUX2LFH&dchild=1&keywords=iphone+12&qid=1605887922&s=electronics&sprefix=iphon%2Celectronics%2C311&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUE2NUJOVVQzVEExV1omZW5jcnlwdGVkSWQ9QTAxOTQ4NzU0VVVQQVE2OU0wR0UmZW5jcnlwdGVkQWRJZD1BMDMyNTEzNjNXM09WQkkyMTVJMUEmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl"},

{"title":"MuscleBlaze Raw Isolate Whey Protein  (1 kg, Unflavored)",
"price":"₹1,399",
"from":"Flipkart",
"image":"https://rukminim1.flixcart.com/image/416/416/kcw9w280/protein-supplement/n/f/r/raw-isolate-nut5031-01-muscleblaze-original-imaftwuvgeu3f8nd.jpeg?q=70",
"link":"https://www.flipkart.com/muscleblaze-raw-isolate-whey-protein/p/itmepkw8s3jgdcnf?pid=PSLEPKW8THM2XNFR&lid=LSTPSLEPKW8THM2XNFRMCSE3M&marketplace=FLIPKART&srno=b_1_7&otracker=hp_omu_Beauty%2B%252C%2BToys%2B%2526%2Bmore_2_18.dealCard.OMU_QU1UPIAIINCZ_16&otracker1=hp_omu_PINNED_neo%2Fmerchandising_Beauty%2B%252C%2BToys%2B%2526%2Bmore_NA_dealCard_cc_2_NA_view-all_16&fm=neo%2Fmerchandising&iid=93f50737-273e-4b89-918d-5655965f57af.PSLEPKW8THM2XNFR.SEARCH&ppt=browse&ppn=browse&ssid=isvy6917hc0000001605260781922"},

{"title":"Hitachi 1.5 Ton 4 Star Split Inverter AC - White  (RSNG417HDEA, Copper Condenser)",
"price":"₹37,231",
"from":"Flipkart",
"image":"https://rukminim1.flixcart.com/image/416/416/kgv5x8w0/air-conditioner-new/x/g/4/rsng417hdea-1-5-split-hitachi-inverter-original-imafxy55g9vbw7jt.jpeg?q=70",
"link":"https://www.flipkart.com/hitachi-1-5-ton-4-star-split-inverter-ac-white/p/itm8446c749d0e16?pid=ACNFWBWQAAGRTXG4&lid=LSTACNFWBWQAAGRTXG4LX6ZVN&marketplace=FLIPKART&srno=b_1_1&otracker=browse&fm=organic&iid=4426a761-591e-425a-abbc-1be57276b125.ACNFWBWQAAGRTXG4.SEARCH&ppt=browse&ppn=browse&ssid=b447s3ado00000001605899090450"}]
    };
  }

  async componentDidMount() {this.fetchData();}

  async fetchData() {}      

  render() {
    return (
      <ScrollView style={styles.Container}>
          <Text style={{alignSelf:"center", width:"90%", margin:10,fontWeight:"bold",fontSize:34}}>Home</Text>
          <View style={styles.box}>
              <Text style={{position: 'absolute', alignSelf:"center", width:"90%",fontSize:18,  fontWeight: "bold", color:"#000", margin: 15}}>MarketPlace</Text>
              <View style={{flexDirection:"row", marginTop:10, alignSelf:"center",}}>
                <TouchableOpacity style={styles.box1} onPress={() => this.props.navigation.navigate("BlogAmazon")}>
                  <Image style={styles.icon}
                         source={require('../assets/Icon/amazon.png')}/>
                  <Text style={{alignSelf:"center",fontWeight:"bold",fontSize:15, margin:5}}>Amazon</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box1} onPress={() => this.props.navigation.navigate("BlogFlipkart")}>
                  <Image style={styles.icon}
                         source={require('../assets/Icon/flipkart.jpeg')}/>
                  <Text style={{alignSelf:"center",fontWeight:"bold",fontSize:15, margin:5}}>Flipkart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box1} onPress={() => this.props.navigation.navigate("Blogebay")}>
                  <Image style={styles.icon}
                         source={require('../assets/Icon/ebay.png')}/>
                  <Text style={{alignSelf:"center",fontWeight:"bold",fontSize:15, margin:5}}>eBay</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box1} onPress={() => this.props.navigation.navigate("BlogMyntra")}>
                  <Image style={styles.icon}
                         source={require('../assets/Icon/myntra.png')}/>
                  <Text style={{alignSelf:"center",fontWeight:"bold",fontSize:15, margin:5}}>Myntra</Text>
                </TouchableOpacity>
              </View>
          </View> 
          <View style={styles.box}>
              <Text style={{position: 'absolute', alignSelf:"center", width:"90%",fontSize:18,  fontWeight: "bold", color:"#000", margin: 15}}>Hot Deals</Text>
              <FlatList
                style={styles.list}
                horizontal={false}
                data={this.state.hotDealsData}
                renderItem={({item}) => {
                  return(
                    <TouchableOpacity style={styles.box2} onPress={() => this.props.navigation.navigate("Blog", {link:item.link})}>
                      <View style={{width:"94%",height:200,}}>
                            <Image style={styles.image}
                                   resizeMode="contain"
                                   source={{uri: item.image}}/>
                      </View>
                      <Text style={{fontWeight:"bold",fontSize:15, margin:5}}>{item.title}</Text>
                      <Text style={{fontWeight:"bold",fontSize:15, margin:5}}>{item.price}</Text>
                      <Text style={{fontWeight:"bold",fontSize:15, margin:5}}>{item.from}</Text>
                    </TouchableOpacity>
                    )}}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}/> 
          </View>       
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  Container:{
    flex:1,
    backgroundColor:"#fff",
    height:"100%",
    width:"100%"  
  },
  
  box:{
    width:"95%",
    alignSelf:"center",
    backgroundColor:"#fff",
    margin:"2.5%",
    borderRadius:15,
    shadowOffset:{height:1, width:1},
    shadowOpacity:0.5,
    flexDirection:"column",
  },
  box1:{
    alignSelf:"center",
    marginTop:"10%",
    marginLeft:15,
    marginRight:15,
    marginBottom:15,
  },
  icon:{
    width:50,
    height:50,
    borderRadius:15,
    shadowOffset:{height:1, width:1},
    shadowOpacity:0.5,
    alignSelf:"center",
  },
  image:{
    width:"100%",
    height:"100%",
    borderRadius:15,
    alignSelf:"center",
  },

  box2:{
    alignSelf:"center",
    width:"42%",
    marginTop:"10%",
    marginLeft:15,
    marginRight:15,
    marginBottom:15,
  },

});