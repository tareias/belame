import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header4 from '../layout/header4';
import Footer5 from '../layout/footer5';
import ProdutosMosaico from '../layout/produtos-mosaico';


class ExtremeOrganic extends Component {


    render() {
        return (
            <>
                <Header4 />

                <div className="page-content bg-white rubik-font">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br class="d-none d-sm-block"></br>
                    <br class="d-none d-sm-block"></br>
                    <div className="section-full content-inner bg-white tax-info-chart" style={{ backgroundImage: "url(" + './images/background/bg4.png' + ")", backgroundPosition: "top right", backgroundRepeat: "no-repeat" }}>
                        <div className="container">
                            <div className="row">
                                <div className="feature-img-bx wow zoomIn col-lg-6 wow fadeInUp text-center" data-wow-delay="1s" data-wow-duration="3s">
                                <div className="video">
                                    <iframe id="ytplayer" type="text/html" src="https://www.youtube.com/embed/tj9R-4mR2mQ?autoplay=1&modestbranding=1&color=white" frameborder="0" allowfullscreen />
                                </div>
                                    {/* <img src="images/main-slider/topo-extremeorganic.jpg" alt="" className="" style={{ paddingTop: "25px" }} /> */}
                                </div>
                                <div className="section-head text-left title-bx col-lg-6 pt-5 ">
                                    <h4 className="m-b10 wow fadeInUp" style={{ color: '#58468c' }} data-wow-delay="1s" data-wow-duration="3s">Belame apresenta:</h4>
                                    <h2 className="box-title m-tb0 blog-number wow fadeInUp" style={{ color: '#6cc000' }} data-wow-delay="2s" data-wow-duration="3s">Extreme Organic<span className="bg-primary"></span></h2>
                                    <p className="wow fadeInUp" data-wow-delay="3s" data-wow-duration="3s">A Extreme Organic Belame foi especialmente desenvolvido para restaurar, hidratar, e proporcionar um alinhamento capilar com segurança, reduzindo volume dos cabelos e deixando-os com balanço.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* <!-- ELement Style  6 --> */}
                    <div className="section-full content-inner about-us-box" style={{ backgroundImage: "url(" + './images/background/bg10.png' + ")", backroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                        {/* <div className="sort-title-bx" data-name="Element Style 6"><i className="fa fa-angle-double-right"></i></div> */}
                        <div className="container">
                            <div className="section-head text-center title-bx ">
                                <h2 className="box-title m-tb0 blog-number" style={{ color: '#6cc000' }}>Passo a Passo<span className="bg-primary"></span></h2>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp m-b20" data-wow-delay="0.2s">
                                    <div className="dlab-box-bg m-b30  fly-box h-100" style={{ backgroundImage: "url(" + './images/passos/bg-ensaboar.jpg' + ")", backgroundColor: "#fff" }}>
                                        <div className="icon-bx-wraper left p-lr20 p-tb30 h-100 blog-bx">
                                            <span className="icon-cell icon-xxl"><img src="./images/passos/SECADOR.png"></img></span>
                                            <div className="icon-content m-b20 p-t5">
                                                <h5 className="blog-number">01</h5>
                                                <p>Com o cabelo seco e limpo, aplicar o <b className="text-pink">Extreme Organic</b> mecha a mecha mantendo 1 cm de distância do couro cabeludo.</p>
                                            </div>
                                            {/* <a href="#" className="site-button">Read More</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp m-b20" data-wow-delay="0.4s">
                                    <div className="dlab-box-bg m-b30  fly-box h-100" style={{ backgroundImage: "url(" + './images/passos/bg-secador.jpg' + ")" }}>
                                        <div className="icon-bx-wraper left p-lr20 p-tb30 h-100 blog-bx">
                                            <div className="text-primary">
                                                <span className="icon-cell icon-xxl"><img src="./images/passos/TOCA.png"></img></span>
                                            </div>
                                            <div className="icon-content m-b20 p-t5">
                                                <h5 className="blog-number">02</h5>
                                                <p>Deixar agir por 1 hora em cabelos cacheados ou levemente lisos, em cabelos afros ou danificados, 1 hora ou 30 minutos. Colocar a touca de hidratação durante a ação do produto.</p>
                                            </div>
                                            {/* <a href="#" className="site-button">Read More</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp m-b20" data-wow-delay="0.6s">
                                    <div className="dlab-box-bg m-b30 fly-box h-100" style={{ backgroundImage: "url(" + './images/passos/bg-aplicacao.jpg' + ")" }}>
                                        <div className="icon-bx-wraper left p-lr20 p-tb30 h-100 blog-bx">
                                            <div className="text-primary">
                                                <span className="icon-cell icon-xxl"><img src="./images/passos/LAVAR.png"></img></span>
                                            </div>
                                            <div className="icon-content m-b20 p-t5">
                                                <h5 className=" blog-number">03</h5>
                                                <p>Enxaguar completamente com água fria e secar 70% do cabelo.</p>
                                            </div>
                                            {/* <a href="#" className="site-button">Read More</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp m-b20" data-wow-delay="0.8s">
                                    <div className="dlab-box-bg m-b30 fly-box h-100" style={{ backgroundImage: "url(" + './images/passos/bg-secador.jpg' + ")" }}>
                                        <div className="icon-bx-wraper left p-lr20 p-tb30 h-100 blog-bx">
                                            <div className="text-primary">
                                                <span className="icon-cell icon-xxl"><img src="./images/passos/CHAPINHA.png"></img></span>
                                            </div>
                                            <div className="icon-content m-b20 p-t5">
                                                <h5 className="blog-number">04</h5>
                                                <p>Chapear mechas finas aproximadamente 10 vezes.</p>
                                            </div>
                                            {/* <a href="#" className="site-button">Read More</a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp m-b20" data-wow-delay="0.9s">
                                    <div className="dlab-box-bg m-b30  fly-box h-100" style={{ backgroundImage: "url(" + './images/passos/bg-chapinha.jpg' + ")" }}>
                                        <div className="icon-bx-wraper left p-lr20 p-tb30 h-100 blog-bx">
                                            <div className="text-primary">
                                                <span className="icon-cell icon-xxl"><img src="./images/passos/ESCOVAR.png"></img></span>
                                            </div>
                                            <div className="icon-content m-b20 p-t5">
                                                <h5 className="blog-number">05</h5>
                                                <p>Finalizar lavando e escovando.</p>
                                            </div>
                                            {/* <a href="#" className="site-button">Read More</a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Our Awesome Services End --> */}

                    <ProdutosMosaico />

                    {/* <!-- Our Recent Blog Posts --> */}
                    <div id="passoapasso" className="content-inner business-blog">
                        <div className="container">
                            <div className="section-head title-bx text-center">
                                <h2>Passo a Passo</h2>
                            </div>
                            <div className="row justify-content-around">
                                <div className="col-md-5">
                                    <div className="blog-post blog-bx blog-img-bottom wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="1s">
                                        <div className="dlab-post-info">
                                            <div className="blog-number">01</div>
                                            <div className="dlab-post-title ">
                                                <h3 className="post-title"><a href={"Lissgloss"}>Como utilizar o Plastic Liss Gloss Belame</a></h3>
                                            </div>
                                            {/* <div className="dlab-post-meta">
                                                    <ul className="d-flex align-items-center">
                                                        <li className="post-author"><i className="ti-user"></i><a href={"javascript:"}>Serenity Caldwell</a></li>
                                                        <li className="post-comment"><a href="#">2 Comments</a> </li>
                                                        <li className="post-date">10 Aug</li>
                                                    </ul>
                                                </div> */}
                                            <div className="dlab-post-text">
                                                <p>Para um tratamento ideal de seus cabelos utilize nosso tratamento plastic liss gloss, aqui vai o passo a passo para obter o resultado ideal.</p>
                                            </div>
                                            <div className="dlab-post-readmore blog-share">
                                                <a href={"Lissgloss"} title="READ MORE" rel="bookmark" className="site-button-link"><i className="fa fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                 <div className="col-md-5">

                                        <div className="dlab-post-media blog-curve-img">
                                            <a href={"Lissgloss"}>
                                                <img src="images/blog/latest-blog/pic2.png" alt="" />
                                            </a>
                                        </div>
{/*
                                    <div className="blog-post blog-bx blog-img-bottom wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">
                                        <div className="dlab-post-info">
                                            <div className="blog-number">03</div>
                                            <div className="dlab-post-title ">
                                                <h3 className="post-title"><a href={"javascript:"}>Como realizar um compra pelo nossa loja no bemarke</a></h3>
                                            </div>
                                            <div className="dlab-post-text">
                                                <p>Clique aqui para conhecer nossa plataforma e como encontrar o belame mais próxima de você.</p>
                                            </div>
                                            <div className="dlab-post-readmore blog-share">
                                                <a href={"javascript:"} title="READ MORE" rel="bookmark" className="site-button-link"><i className="fa fa-long-arrow-right"></i></a>
                                            </div>
                                        </div>
                                        <div className="dlab-post-media blog-curve-img">
                                            <a href={"javascript:"}><img src="images/blog/latest-blog/pic3.png" alt="" /></a>
                                        </div>
                                    </div>
                                    */}
                                </div> 
                            </div>
                        </div>
                    </div>
                    {/* <!-- Our Recent Blog Posts END --> */}
                </div>



                <Footer5 />

            </>
        )
    }
}
export default ExtremeOrganic;