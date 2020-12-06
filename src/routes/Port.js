import React from 'react';
import axios from 'axios';
import PortData from './PortData';
import Header from '../components/Header';
import Title from '../components/Title';


class Port extends React.Component {
    state = {
        isLoading: true,
        ports : []    //포트폴리오 내용이 저장될 곳
    }

    getPorts = async () => {
        const {
            data : {
                data: { ports },
            },
        } = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");
        
        this.setState({ ports, isLoading: false });
    }

    componentDidMount(){
        setTimeout(() => {
            this.getPorts();
        },1000);
    }
    
    render() {
      const { isLoading, ports } = this.state;
      return (
          <div id="wrap">
              <Header />
              {isLoading ? (
                  <div className="loader">
                      <span>로딩중...</span>
                  </div>
              ) : (
                  <main id="main">
                      <section id="portCont">
                          <div className="container">
                              <div>
                                  <Title text={['Portfolio','site','Portfolio site']} />
                              </div>
                              
                              <div className="portCont">
                                  {ports.map(info => (
                                      <PortData
                                          key={info.id}
                                          id={info.id}
                                          link={info.link}
                                          image={info.image}
                                          title={info.title}
                                          category={info.category}
                                      />
                                  ))}
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


export default Port;