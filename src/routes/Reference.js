import React from 'react';
import axios from 'axios';
import ReferData from './ReferData';
import Header from '../components/Header';
import Title from '../components/Title';


class Reference extends React.Component {
  state = {
    isLoading : true,
    refers : [],
  }

  getRefer = async() => {
    const {
      data: {
        data: {htmlRefer},
      },
    } = await axios.get("https://webstoryboy.github.io/dothome1/refer.json");
    // console.log(refers.data.data.htmlRefer);
    this.setState({ htmlRefer, isLoading : false});
  }

  componentDidMount(){
    setTimeout(() => {

      this.getRefer();
    }, 1000);
  }

  render(){
    const { isLoading, htmlRefer } = this.state;
    return (
      <div id="wrap">
        <Header color = "gray"/>
        {isLoading ? (
            <div className="loader">
                <span>로딩중...</span>
            </div>
        ) : (
            <main id="main">
                <section id="referCont">
                    <div className="container">
                        <div>
                            <Title text={['Portfolio','site','Portfolio site']} />
                        </div>
                        <div class="referTable">
                        <h2>CSS REFERENCE</h2>
                          <ul>
                              {htmlRefer.map(info => (
                                  <ReferData
                                      key={info.id}
                                      id={info.id}
                                      desc={info.desc}
                                      title={info.title}
                                  />
                              ))}
                          </ul>
                        </div>
                    </div>
                </section>
            </main>
        )}
        {/* <Footer /> */}
     </div>
      )
    }
}
export default Reference;