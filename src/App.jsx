<div>
  import {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'} useState {'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'} from 'react'
  import reactLogo from './assets/react.svg'
  import viteLogo from '/vite.svg'
  import './App.css'
  function App() {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}
  const [count, setCount] = useState(0)
  return (
  &lt;&gt;
  <div>
    {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}/* meta data */{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
    <meta charSet="utf-8" />
    <meta httpequiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
    {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}/*font-family*/{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&subset=devanagari,latin-ext" rel="stylesheet" />
    {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}/* title of site */{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
    <title>Browny</title>
    {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}/* For favicon png */{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
    <link rel="shortcut icon" type="image/icon" href="assets/logo/favicon.png" />
    {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}/*font-awesome.min.css*/{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
    <link rel="stylesheet" href="assets/css/font-awesome.min.css" />
    {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}/*flat icon css*/{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
    <link rel="stylesheet" href="assets/css/flaticon.css" />
    {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}/*animate.css*/{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
    <link rel="stylesheet" href="assets/css/animate.css" />
    {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}/*owl.carousel.css*/{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
    <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
    <link rel="stylesheet" href="assets/css/owl.theme.default.min.css" />
    {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}/*bootstrap.min.css*/{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
    {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}/* bootsnav */{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
    <link rel="stylesheet" href="assets/css/bootsnav.css" />	
    {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}/*style.css*/{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
    <link rel="stylesheet" href="assets/css/style.css" />
    {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}/*responsive.css*/{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
    <link rel="stylesheet" href="assets/css/responsive.css" />
    {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
    {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}/* WARNING: Respond.js doesn't work if you view the page via file:// */{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
    {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}/*[if lt IE 9]&gt;
    {'{'}'{'{'}'{'}'}/*[endif]* /{'{'}'{'}'}'{'}'}
    <p classname="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
    <header classname="top-area">
      <div classname="header-area">
        <nav classname="navbar navbar-default bootsnav navbar-fixed dark no-background">
          <div classname="container">
            <div classname="navbar-header">
              <button type="button" classname="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                <i classname="fa fa-bars">
                </i></button><i classname="fa fa-bars">
                <a classname="navbar-brand" href="index.html">browny</a>
              </i></div><i classname="fa fa-bars">
              <div classname="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                <ul classname="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                  <li classname=" smooth-menu active">
                  </li><li classname=" smooth-menu"><a href="#education">education</a></li>
                  <li classname="smooth-menu"><a href="#skills">skills</a></li>
                  <li classname="smooth-menu"><a href="#experience">experience</a></li>
                  <li classname="smooth-menu"><a href="#profiles">profile</a></li>
                  <li classname="smooth-menu"><a href="#portfolio">portfolio</a></li>
                  <li classname="smooth-menu"><a href="#clients">clients</a></li>
                  <li classname="smooth-menu"><a href="#contact">contact</a></li>
                </ul>
              </div>
            </i></div><i classname="fa fa-bars">
          </i></nav><i classname="fa fa-bars">
        </i></div><i classname="fa fa-bars">
        <div classname="clearfix">
        </div></i></header><i classname="fa fa-bars">
      <section id="welcome-hero" classname="welcome-hero">
        <div classname="container">
          <div classname="row">
            <div classname="col-md-12 text-center">
              <div classname="header-text">
                <h2>hi <span>,</span> i am <br /> Imelda <br /> Ronga <span>.</span> </h2>
                <p>web developer</p>
                <a href="assets/download/browney.txt" download>download resume</a>
              </div>
            </div>
          </div>
        </div>
      </section>&lt;
      <section id="about" classname="about">
        <div classname="section-heading text-center">
          <h2>about me</h2>
        </div>
        <div classname="container">
          <div classname="about-content">
            <div classname="row">
              <div classname="col-sm-6">
                <div classname="single-about-txt">
                  <h3>
                    I am a profesional Web developer. Consectetur an adipisi elita, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud.
                  </h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspi unde omnis iste natus error sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam vo luptatem quia voluptas sit aspernatur aut odit aut fugit,
                  </p>
                  <div classname="row">
                    <div classname="col-sm-4">
                      <div classname="single-about-add-info">
                        <h3>phone</h3>
                        <p>082234567898</p>
                      </div>
                    </div>
                    <div classname="col-sm-4">
                      <div classname="single-about-add-info">
                        <h3>email</h3>
                        <p>imelda@gmail.com</p>
                      </div>
                    </div>
                    <div classname="col-sm-4">
                      <div classname="single-about-add-info">
                        <h3>website</h3>
                        <p>www.imlrnga.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div classname="col-sm-offset-1 col-sm-5">
                <div classname="single-about-img">
                  <img src="assets/images/about/profile_image.jpg" alt="profile_image" />
                  <div classname="about-list-icon">
                    <ul>
                      <li>
                        <a href="#">
                          <i classname="fa fa-facebook" aria-hidden="true">
                          </i></a><i classname="fa fa-facebook" aria-hidden="true">
                        </i></li><i classname="fa fa-facebook" aria-hidden="true">
                        <li>
                          <a href="#">
                            <i classname="fa fa-dribbble" aria-hidden="true">
                            </i></a><i classname="fa fa-dribbble" aria-hidden="true">
                          </i></li><i classname="fa fa-dribbble" aria-hidden="true">
                          <li>
                            <a href="#">
                              <i classname="fa fa-twitter" aria-hidden="true">
                              </i></a><i classname="fa fa-twitter" aria-hidden="true">
                            </i></li><i classname="fa fa-twitter" aria-hidden="true">
                            <li>
                              <a href="#">
                                <i classname="fa fa-linkedin" aria-hidden="true">
                                </i></a><i classname="fa fa-linkedin" aria-hidden="true">
                              </i></li><i classname="fa fa-linkedin" aria-hidden="true">
                              <li>
                                <a href="#">
                                  <i classname="fa fa-instagram" aria-hidden="true">
                                  </i></a><i classname="fa fa-instagram" aria-hidden="true">
                                </i></li><i classname="fa fa-instagram" aria-hidden="true">
                              </i></i></i></i></i></ul><i classname="fa fa-facebook" aria-hidden="true"><i classname="fa fa-dribbble" aria-hidden="true"><i classname="fa fa-twitter" aria-hidden="true"><i classname="fa fa-linkedin" aria-hidden="true"><i classname="fa fa-instagram" aria-hidden="true">
                            </i></i></i></i></i></div><i classname="fa fa-facebook" aria-hidden="true"><i classname="fa fa-dribbble" aria-hidden="true"><i classname="fa fa-twitter" aria-hidden="true"><i classname="fa fa-linkedin" aria-hidden="true"><i classname="fa fa-instagram" aria-hidden="true">&lt;
                          </i></i></i></i></i></div><i classname="fa fa-facebook" aria-hidden="true"><i classname="fa fa-dribbble" aria-hidden="true"><i classname="fa fa-twitter" aria-hidden="true"><i classname="fa fa-linkedin" aria-hidden="true"><i classname="fa fa-instagram" aria-hidden="true">
                        </i></i></i></i></i></div><i classname="fa fa-facebook" aria-hidden="true"><i classname="fa fa-dribbble" aria-hidden="true"><i classname="fa fa-twitter" aria-hidden="true"><i classname="fa fa-linkedin" aria-hidden="true"><i classname="fa fa-instagram" aria-hidden="true">
                      </i></i></i></i></i></div><i classname="fa fa-facebook" aria-hidden="true"><i classname="fa fa-dribbble" aria-hidden="true"><i classname="fa fa-twitter" aria-hidden="true"><i classname="fa fa-linkedin" aria-hidden="true"><i classname="fa fa-instagram" aria-hidden="true">
                    </i></i></i></i></i></div><i classname="fa fa-facebook" aria-hidden="true"><i classname="fa fa-dribbble" aria-hidden="true"><i classname="fa fa-twitter" aria-hidden="true"><i classname="fa fa-linkedin" aria-hidden="true"><i classname="fa fa-instagram" aria-hidden="true">
                  </i></i></i></i></i></div><i classname="fa fa-facebook" aria-hidden="true"><i classname="fa fa-dribbble" aria-hidden="true"><i classname="fa fa-twitter" aria-hidden="true"><i classname="fa fa-linkedin" aria-hidden="true"><i classname="fa fa-instagram" aria-hidden="true">
                </i></i></i></i></i></section><i classname="fa fa-facebook" aria-hidden="true"><i classname="fa fa-dribbble" aria-hidden="true"><i classname="fa fa-twitter" aria-hidden="true"><i classname="fa fa-linkedin" aria-hidden="true"><i classname="fa fa-instagram" aria-hidden="true">
                <section id="education" classname="education">
                  <div classname="section-heading text-center">
                    <h2>education</h2>
                  </div>
                  <div classname="container">
                    <div classname="education-horizontal-timeline">
                      <div classname="row">
                        <div classname="col-sm-4">
                          <div classname="single-horizontal-timeline">
                            <div classname="experience-time">
                              <h2>2019 - 2023</h2>
                              <h3>sarjana <span>of </span> computer science</h3>
                            </div>{'{'}/*/.experience-time* /{'}'}
                            <div classname="timeline-horizontal-border">
                              <i classname="fa fa-circle" aria-hidden="true">
                                <span classname="single-timeline-horizontal">
                                </span></i></div><i classname="fa fa-circle" aria-hidden="true">
                              <div classname="timeline">
                                <div classname="timeline-content">
                                  <h4 classname="title">
                                    klabat university
                                  </h4>
                                  <h5>minahasa utara</h5>
                                  <p classname="description">
                                    Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                                  </p>
                                </div>
                              </div>
                            </i></div><i classname="fa fa-circle" aria-hidden="true">
                            <div classname="col-sm-4">
                              <div classname="single-horizontal-timeline">
                                <div classname="experience-time">
                                  <h2>2023 - 2025</h2>
                                  <h3>master <span>of </span> computer science</h3>
                                </div>
                                <div classname="timeline-horizontal-border">
                                  <i classname="fa fa-circle" aria-hidden="true">
                                    <span classname="single-timeline-horizontal">
                                    </span></i></div><i classname="fa fa-circle" aria-hidden="true">
                                  <div classname="timeline">
                                    <div classname="timeline-content">
                                      <h4 classname="title">
                                        klabat university
                                      </h4>
                                      <h5>north carolina, USA</h5>
                                      <p classname="description">
                                        Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                                      </p>
                                    </div>
                                  </div>
                                </i></div><i classname="fa fa-circle" aria-hidden="true">
                              </i></div><i classname="fa fa-circle" aria-hidden="true">
                              <div classname="col-sm-4">
                                <div classname="single-horizontal-timeline">
                                  <div classname="experience-time">
                                    <h2>2023-2027</h2>
                                    <h3>bachelor <span>of </span> compute sience</h3>
                                  </div>{'{'}/*/.experience-time*/{'}'}
                                  <div classname="timeline-horizontal-border">
                                    <i classname="fa fa-circle" aria-hidden="true">
                                      <span classname="single-timeline-horizontal spacial-horizontal-line
									">
                                      </span></i></div><i classname="fa fa-circle" aria-hidden="true">
                                    <div classname="timeline">
                                      <div classname="timeline-content">
                                        <h4 classname="title">
                                          Klabat University
                                        </h4>
                                        <h5>Minahasa Utara</h5>
                                        <p classname="description">
                                          Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                                        </p>
                                      </div>
                                    </div>
                                  </i></div><i classname="fa fa-circle" aria-hidden="true">
                                </i></div><i classname="fa fa-circle" aria-hidden="true">
                                <section id="skills" classname="skills">
                                  <div classname="skill-content">
                                    <div classname="section-heading text-center">
                                      <h2>skills</h2>
                                    </div>
                                    <div classname="container">
                                      <div classname="row">
                                        <div classname="col-md-6">
                                          <div classname="single-skill-content">
                                            <div classname="barWrapper">
                                              <span classname="progressText">HTML</span>
                                              <div classname="single-progress-txt">
                                                <div classname="progress ">
                                                  <div classname="progress-bar" role="progressbar" aria-valuenow="{90}" aria-valuemin="{10}" aria-valuemax="{100}" style={{}}>
                                                  </div>
                                                </div>
                                                <h3>90%</h3>	
                                              </div>
                                            </div>
                                            <div classname="barWrapper">
                                              <span classname="progressText">CSS</span>
                                              <div classname="single-progress-txt">
                                                <div classname="progress ">
                                                  <div classname="progress-bar" role="progressbar" aria-valuenow="{85}" aria-valuemin="{10}" aria-valuemax="{100}" style={{}}>
                                                  </div>
                                                </div>
                                                <h3>85%</h3>	
                                              </div>
                                            </div>
                                            <div classname="barWrapper">
                                              <span classname="progressText">Javascript</span>
                                              <div classname="single-progress-txt">
                                                <div classname="progress ">
                                                  <div classname="progress-bar" role="progressbar" aria-valuenow="{97}" aria-valuemin="{10}" aria-valuemax="{100}" style={{}}>
                                                  </div>
                                                </div>
                                                <h3>97%</h3>	
                                              </div>
                                            </div>
                                            <div classname="barWrapper">
                                              <span classname="progressText">Testing and Debugging</span>
                                              <div classname="single-progress-txt">
                                                <div classname="progress ">
                                                  <div classname="progress-bar" role="progressbar" aria-valuenow="{90}" aria-valuemin="{10}" aria-valuemax="{100}" style={{}}>
                                                  </div>
                                                </div>
                                                <h3>90%</h3>	
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div classname="col-md-6">
                                          <div classname="single-skill-content">
                                            <div classname="barWrapper">
                                              <span classname="progressText">adaptasi dan fleksibilitas</span>
                                              <div classname="single-progress-txt">
                                                <div classname="progress ">
                                                  <div classname="progress-bar" role="progressbar" aria-valuenow="{90}" aria-valuemin="{10}" aria-valuemax="{100}" style={{}}>
                                                  </div>
                                                </div>
                                                <h3>90%</h3>	
                                              </div>
                                            </div>
                                            <div classname="barWrapper">
                                              <span classname="progressText">comunication</span>
                                              <div classname="single-progress-txt">
                                                <div classname="progress ">
                                                  <div classname="progress-bar" role="progressbar" aria-valuenow="{85}" aria-valuemin="{10}" aria-valuemax="{100}" style={{}}>
                                                  </div>
                                                </div>
                                                <h3>85%</h3>	
                                              </div>
                                            </div>
                                            <div classname="barWrapper">
                                              <span classname="progressText">problem solving</span>
                                              <div classname="single-progress-txt">
                                                <div classname="progress ">
                                                  <div classname="progress-bar" role="progressbar" aria-valuenow="{97}" aria-valuemin="{10}" aria-valuemax="{100}" style={{}}>
                                                  </div>
                                                </div>
                                                <h3>97%</h3>	
                                              </div>
                                            </div>
                                            <div classname="barWrapper">
                                              <span classname="progressText"> time management</span>
                                              <div classname="single-progress-txt">
                                                <div classname="progress ">
                                                  <div classname="progress-bar" role="progressbar" aria-valuenow="{90}" aria-valuemin="{10}" aria-valuemax="{100}" style={{}}>
                                                  </div>
                                                </div>
                                                <h3>90%</h3>	
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>		
                                  </div>
                                </section>
                                <section id="experience" classname="experience">
                                  <div classname="section-heading text-center">
                                    <h2>experience</h2>
                                  </div>
                                  <div classname="container">
                                    <div classname="experience-content">
                                      <div classname="main-timeline">
                                        <ul>
                                          <li>
                                            <div classname="single-timeline-box fix">
                                              <div classname="row">
                                                <div classname="col-md-5">
                                                  <div classname="experience-time text-right">
                                                    <h2>2027 - Present</h2>
                                                    <h3>creative director</h3>
                                                  </div>
                                                </div>
                                                <div classname="col-md-offset-1 col-md-5">
                                                  <div classname="timeline">
                                                    <div classname="timeline-content">
                                                      <h4 classname="title">
                                                        <span><i classname="fa fa-circle" aria-hidden="true" /></span><i classname="fa fa-circle" aria-hidden="true">
                                                          hoplony tech limited
                                                        </i></h4><i classname="fa fa-circle" aria-hidden="true">
                                                        <h5>newyork, USA</h5>
                                                        <p classname="description">
                                                          Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                                                        </p>
                                                      </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                    </i></div><i classname="fa fa-circle" aria-hidden="true">&lt;
                                                  </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                </i></div><i classname="fa fa-circle" aria-hidden="true">
                                              </i></div><i classname="fa fa-circle" aria-hidden="true">
                                            </i></li><i classname="fa fa-circle" aria-hidden="true">
                                            <li>
                                              <div classname="single-timeline-box fix">
                                                <div classname="row">
                                                  <div classname="col-md-offset-1 col-md-5 experience-time-responsive">
                                                    <div classname="experience-time">
                                                      <h2>
                                                        <span><i classname="fa fa-circle" aria-hidden="true" /></span><i classname="fa fa-circle" aria-hidden="true">
                                                          2027 - 2030
                                                        </i></h2><i classname="fa fa-circle" aria-hidden="true">
                                                        <h3>associate design director</h3>
                                                      </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                    </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                    <div classname="col-md-5">
                                                      <div classname="timeline">
                                                        <div classname="timeline-content text-right">
                                                          <h4 classname="title">
                                                            hoplony tech limited
                                                          </h4>
                                                          <h5>newyork, USA</h5>
                                                          <p classname="description">
                                                            Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                                                          </p>
                                                        </div>
                                                      </div>
                                                    </div>
                                                    <div classname="col-md-offset-1 col-md-5 experience-time-main">
                                                      <div classname="experience-time">
                                                        <h2>
                                                          <span><i classname="fa fa-circle" aria-hidden="true" /></span><i classname="fa fa-circle" aria-hidden="true">
                                                            2016 - 2018
                                                          </i></h2><i classname="fa fa-circle" aria-hidden="true">
                                                          <h3>associate design director</h3>
                                                        </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                      </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                    </i></i></div><i classname="fa fa-circle" aria-hidden="true"><i classname="fa fa-circle" aria-hidden="true">
                                                  </i></i></div><i classname="fa fa-circle" aria-hidden="true"><i classname="fa fa-circle" aria-hidden="true">
                                                </i></i></li><i classname="fa fa-circle" aria-hidden="true"><i classname="fa fa-circle" aria-hidden="true">
                                                <li>
                                                  <div classname="single-timeline-box fix">
                                                    <div classname="row">
                                                      <div classname="col-md-5">
                                                        <div classname="experience-time text-right">
                                                          <h2>2013 - 2016</h2>
                                                          <h3>senior UI/UX designer</h3>
                                                        </div>
                                                      </div>
                                                      <div classname="col-md-offset-1 col-md-5">
                                                        <div classname="timeline">
                                                          <div classname="timeline-content">
                                                            <h4 classname="title">
                                                              <span><i classname="fa fa-circle" aria-hidden="true" /></span><i classname="fa fa-circle" aria-hidden="true">
                                                                hoplony tech limited
                                                              </i></h4><i classname="fa fa-circle" aria-hidden="true">
                                                              <h5>newyork, USA</h5>
                                                              <p classname="description">
                                                                Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                                                              </p>
                                                            </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                          </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                        </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                      </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                    </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                  </i></li><i classname="fa fa-circle" aria-hidden="true">
                                                  <li>
                                                    <div classname="single-timeline-box fix">
                                                      <div classname="row">
                                                        <div classname="col-md-offset-1 col-md-5 experience-time-responsive">
                                                          <div classname="experience-time">
                                                            <h2>
                                                              <span><i classname="fa fa-circle" aria-hidden="true" /></span><i classname="fa fa-circle" aria-hidden="true">
                                                                2012 - 2013
                                                              </i></h2><i classname="fa fa-circle" aria-hidden="true">
                                                              <h3>UI/UX designer</h3>
                                                            </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                          </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                          <div classname="col-md-5">
                                                            <div classname="timeline">
                                                              <div classname="timeline-content text-right">
                                                                <h4 classname="title">
                                                                  hoplony tech limited
                                                                </h4>
                                                                <h5>newyork, USA</h5>
                                                                <p classname="description">
                                                                  Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                                                                </p>
                                                              </div>
                                                            </div>&lt;
                                                          </div>
                                                          <div classname="col-md-offset-1 col-md-5 experience-time-main">
                                                            <div classname="experience-time">
                                                              <h2>
                                                                <span><i classname="fa fa-circle" aria-hidden="true" /></span><i classname="fa fa-circle" aria-hidden="true">
                                                                  2012 - 2013
                                                                </i></h2><i classname="fa fa-circle" aria-hidden="true">
                                                                <h3>UI/UX designer</h3>
                                                              </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                            </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                          </i></i></div><i classname="fa fa-circle" aria-hidden="true"><i classname="fa fa-circle" aria-hidden="true">
                                                        </i></i></div><i classname="fa fa-circle" aria-hidden="true"><i classname="fa fa-circle" aria-hidden="true">
                                                      </i></i></li><i classname="fa fa-circle" aria-hidden="true"><i classname="fa fa-circle" aria-hidden="true">
                                                      <li>
                                                        <div classname="single-timeline-box fix">
                                                          <div classname="row">
                                                            <div classname="col-md-5">
                                                              <div classname="experience-time text-right">
                                                                <h2>2010 - 2012</h2>
                                                                <h3>frontend developer</h3>
                                                              </div>&lt;
                                                            </div>
                                                            <div classname="col-md-offset-1 col-md-5">
                                                              <div classname="timeline">
                                                                <div classname="timeline-content">
                                                                  <h4 classname="title">
                                                                    <span><i classname="fa fa-circle" aria-hidden="true" /></span><i classname="fa fa-circle" aria-hidden="true">
                                                                      hoplony tech limited
                                                                    </i></h4><i classname="fa fa-circle" aria-hidden="true">
                                                                    <h5>newyork, USA</h5>
                                                                    <p classname="description">
                                                                      Duis aute irure dolor in reprehenderit in vol patate velit esse cillum dolore eu fugiat nulla pari. Excepteur sint occana inna tecat cupidatat non proident. 
                                                                    </p>
                                                                  </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                                </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                              </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                            </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                          </i></div><i classname="fa fa-circle" aria-hidden="true">
                                                        </i></li><i classname="fa fa-circle" aria-hidden="true">
                                                      </i></i></i></i></i></i></i></ul><i classname="fa fa-circle" aria-hidden="true"><i classname="fa fa-circle" aria-hidden="true"><i classname="fa fa-circle" aria-hidden="true">
                                            </i></i></i></div><i classname="fa fa-circle" aria-hidden="true"><i classname="fa fa-circle" aria-hidden="true"><i classname="fa fa-circle" aria-hidden="true">
                                          </i></i></i></div><i classname="fa fa-circle" aria-hidden="true"><i classname="fa fa-circle" aria-hidden="true"><i classname="fa fa-circle" aria-hidden="true">
                                        </i></i></i></div><i classname="fa fa-circle" aria-hidden="true"><i classname="fa fa-circle" aria-hidden="true"><i classname="fa fa-circle" aria-hidden="true">
                                      </i></i></i></section><i classname="fa fa-circle" aria-hidden="true"><i classname="fa fa-circle" aria-hidden="true"><i classname="fa fa-circle" aria-hidden="true">
                                      <section id="profiles" classname="profiles">
                                        <div classname="profiles-details">
                                          <div classname="section-heading text-center">
                                            <h2>profiles</h2>
                                          </div>
                                          <div classname="container">
                                            <div classname="profiles-content">
                                              <div classname="row">
                                                <div classname="col-sm-3">
                                                  <div classname="single-profile">
                                                    <div classname="profile-txt">
                                                      <a href><i classname="flaticon-themeforest" /></a><i classname="flaticon-themeforest">
                                                        <div classname="profile-icon-name">themeforest</div>
                                                      </i></div><i classname="flaticon-themeforest">
                                                      <div classname="single-profile-overlay">
                                                        <div classname="profile-txt">
                                                          <a href><i classname="flaticon-themeforest" /></a><i classname="flaticon-themeforest">
                                                            <div classname="profile-icon-name">themeforest</div>
                                                          </i></div><i classname="flaticon-themeforest">
                                                        </i></div><i classname="flaticon-themeforest">
                                                      </i></i></div><i classname="flaticon-themeforest"><i classname="flaticon-themeforest">
                                                    </i></i></div><i classname="flaticon-themeforest"><i classname="flaticon-themeforest">
                                                    <div classname="col-sm-3">
                                                      <div classname="single-profile">
                                                        <div classname="profile-txt">
                                                          <a href><i classname="flaticon-dribbble" /></a><i classname="flaticon-dribbble">
                                                            <div classname="profile-icon-name">dribbble</div>
                                                          </i></div><i classname="flaticon-dribbble">
                                                          <div classname="single-profile-overlay">
                                                            <div classname="profile-txt">
                                                              <a href><i classname="flaticon-dribbble" /></a><i classname="flaticon-dribbble">
                                                                <div classname="profile-icon-name">dribbble</div>
                                                              </i></div><i classname="flaticon-dribbble">
                                                            </i></div><i classname="flaticon-dribbble">
                                                          </i></i></div><i classname="flaticon-dribbble"><i classname="flaticon-dribbble">
                                                        </i></i></div><i classname="flaticon-dribbble"><i classname="flaticon-dribbble">
                                                        <div classname="col-sm-3">
                                                          <div classname="single-profile">
                                                            <div classname="profile-txt">
                                                              <a href><i classname="flaticon-behance-logo" /></a><i classname="flaticon-behance-logo">
                                                                <div classname="profile-icon-name">behance</div>
                                                              </i></div><i classname="flaticon-behance-logo">
                                                              <div classname="single-profile-overlay">
                                                                <div classname="profile-txt">
                                                                  <a href><i classname="flaticon-behance-logo" /></a><i classname="flaticon-behance-logo">
                                                                    <div classname="profile-icon-name">behance</div>
                                                                  </i></div><i classname="flaticon-behance-logo">
                                                                </i></div><i classname="flaticon-behance-logo">
                                                              </i></i></div><i classname="flaticon-behance-logo"><i classname="flaticon-behance-logo">
                                                            </i></i></div><i classname="flaticon-behance-logo"><i classname="flaticon-behance-logo">
                                                            <div classname="col-sm-3">
                                                              <div classname="single-profile profile-no-border">
                                                                <div classname="profile-txt">
                                                                  <a href><i classname="flaticon-github-logo" /></a><i classname="flaticon-github-logo">
                                                                    <div classname="profile-icon-name">github</div>
                                                                  </i></div><i classname="flaticon-github-logo">
                                                                  <div classname="single-profile-overlay">
                                                                    <div classname="profile-txt">
                                                                      <a href><i classname="flaticon-github-logo" /></a><i classname="flaticon-github-logo">
                                                                        <div classname="profile-icon-name">github</div>
                                                                      </i></div><i classname="flaticon-github-logo">
                                                                    </i></div><i classname="flaticon-github-logo">
                                                                  </i></i></div><i classname="flaticon-github-logo"><i classname="flaticon-github-logo">
                                                                </i></i></div><i classname="flaticon-github-logo"><i classname="flaticon-github-logo">
                                                              </i></i></i></i></i></i></i></i></div><i classname="flaticon-themeforest"><i classname="flaticon-dribbble"><i classname="flaticon-behance-logo"><i classname="flaticon-behance-logo"><i classname="flaticon-github-logo"><i classname="flaticon-github-logo">
                                                          <div classname="profile-border">
                                                            <div classname="row">
                                                              <div classname="col-sm-3">
                                                                <div classname="single-profile">
                                                                  <div classname="profile-txt">
                                                                    <a href><i classname="flaticon-flickr-website-logo-silhouette" /></a><i classname="flaticon-flickr-website-logo-silhouette">
                                                                      <div classname="profile-icon-name">flickR</div>
                                                                    </i></div><i classname="flaticon-flickr-website-logo-silhouette">
                                                                    <div classname="single-profile-overlay">
                                                                      <div classname="profile-txt">
                                                                        <a href><i classname="flaticon-flickr-website-logo-silhouette" /></a><i classname="flaticon-flickr-website-logo-silhouette">
                                                                          <div classname="profile-icon-name">flickR</div>
                                                                        </i></div><i classname="flaticon-flickr-website-logo-silhouette">
                                                                      </i></div><i classname="flaticon-flickr-website-logo-silhouette">
                                                                    </i></i></div><i classname="flaticon-flickr-website-logo-silhouette"><i classname="flaticon-flickr-website-logo-silhouette">
                                                                  </i></i></div><i classname="flaticon-flickr-website-logo-silhouette"><i classname="flaticon-flickr-website-logo-silhouette">
                                                                  <div classname="col-sm-3">
                                                                    <div classname="single-profile">
                                                                      <div classname="profile-txt">
                                                                        <a href><i classname="flaticon-smug" /></a><i classname="flaticon-smug">
                                                                          <div classname="profile-icon-name">smungMung</div>
                                                                        </i></div><i classname="flaticon-smug">
                                                                        <div classname="single-profile-overlay">
                                                                          <div classname="profile-txt">
                                                                            <a href><i classname="flaticon-smug" /></a><i classname="flaticon-smug">
                                                                              <div classname="profile-icon-name">smungMung</div>
                                                                            </i></div><i classname="flaticon-smug">
                                                                          </i></div><i classname="flaticon-smug">
                                                                        </i></i></div><i classname="flaticon-smug"><i classname="flaticon-smug">
                                                                      </i></i></div><i classname="flaticon-smug"><i classname="flaticon-smug">
                                                                      <div classname="col-sm-3">
                                                                        <div classname="single-profile">
                                                                          <div classname="profile-txt">
                                                                            <a href><i classname="flaticon-squarespace-logo" /></a><i classname="flaticon-squarespace-logo">
                                                                              <div classname="profile-icon-name">squareSpace</div>
                                                                            </i></div><i classname="flaticon-squarespace-logo">
                                                                            <div classname="single-profile-overlay">
                                                                              <div classname="profile-txt">
                                                                                <a href><i classname="flaticon-squarespace-logo" /></a><i classname="flaticon-squarespace-logo">
                                                                                  <div classname="profile-icon-name">squareSpace</div>
                                                                                </i></div><i classname="flaticon-squarespace-logo">
                                                                              </i></div><i classname="flaticon-squarespace-logo">
                                                                            </i></i></div><i classname="flaticon-squarespace-logo"><i classname="flaticon-squarespace-logo">
                                                                          </i></i></div><i classname="flaticon-squarespace-logo"><i classname="flaticon-squarespace-logo">
                                                                          <div classname="col-sm-3">
                                                                            <div classname="single-profile profile-no-border">
                                                                              <div classname="profile-txt">
                                                                                <a href><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective" /></a><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective">
                                                                                  <div classname="profile-icon-name">bitBucket</div>
                                                                                </i></div><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective">
                                                                                <div classname="single-profile-overlay">
                                                                                  <div classname="profile-txt">
                                                                                    <a href><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective" /></a><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective">
                                                                                      <div classname="profile-icon-name">bitBucket</div>
                                                                                    </i></div><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective">
                                                                                  </i></div><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective">
                                                                                </i></i></div><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective"><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective">
                                                                              </i></i></div><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective"><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective">
                                                                            </i></i></i></i></i></i></i></i></div><i classname="flaticon-flickr-website-logo-silhouette"><i classname="flaticon-smug"><i classname="flaticon-squarespace-logo"><i classname="flaticon-squarespace-logo"><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective"><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective">
                                                                      </i></i></i></i></i></i></div><i classname="flaticon-flickr-website-logo-silhouette"><i classname="flaticon-smug"><i classname="flaticon-squarespace-logo"><i classname="flaticon-squarespace-logo"><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective"><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective">
                                                                    </i></i></i></i></i></i></i></i></i></i></i></i></div><i classname="flaticon-flickr-website-logo-silhouette"><i classname="flaticon-smug"><i classname="flaticon-squarespace-logo"><i classname="flaticon-squarespace-logo"><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective"><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective">
                                                      </i></i></i></i></i></i></div><i classname="flaticon-flickr-website-logo-silhouette"><i classname="flaticon-smug"><i classname="flaticon-squarespace-logo"><i classname="flaticon-squarespace-logo"><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective"><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective">
                                                    </i></i></i></i></i></i></div></section><i classname="flaticon-flickr-website-logo-silhouette"><i classname="flaticon-smug"><i classname="flaticon-squarespace-logo"><i classname="flaticon-squarespace-logo"><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective"><i classname="flaticon-bitbucket-logotype-camera-lens-in-perspective">
                                                  <section id="portfolio" classname="portfolio">
                                                    <div classname="portfolio-details">
                                                      <div classname="section-heading text-center">
                                                        <h2>portfolio</h2>
                                                      </div>
                                                      <div classname="container">
                                                        <div classname="portfolio-content">
                                                          <div classname="isotope">
                                                            <div classname="row">
                                                              <div classname="col-sm-4">
                                                                <div classname="item">
                                                                  <img src="assets/images/portfolio/p1.jpg" alt="portfolio image" />
                                                                  <div classname="isotope-overlay">
                                                                    <a href="#">
                                                                      ui/ux design
                                                                    </a>
                                                                  </div>
                                                                </div>
                                                                <div classname="item">
                                                                  <img src="assets/images/portfolio/p2.jpg" alt="portfolio image" />
                                                                  <div classname="isotope-overlay">
                                                                    <a href="#">
                                                                      ui/ux design
                                                                    </a>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div classname="col-sm-4">
                                                                <div classname="item">
                                                                  <img src="assets/images/portfolio/p3.jpg" alt="portfolio image" />
                                                                  <div classname="isotope-overlay">
                                                                    <a href="#">
                                                                      web design
                                                                    </a>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                              <div classname="col-sm-4">
                                                                <div classname="item">
                                                                  <img src="assets/images/portfolio/p4.jpg" alt="portfolio image" />
                                                                  <div classname="isotope-overlay">
                                                                    <a href="#">
                                                                      web development
                                                                    </a>
                                                                  </div>
                                                                </div>
                                                                <div classname="item">
                                                                  <img src="assets/images/portfolio/p5.jpg" alt="portfolio image" />
                                                                  <div classname="isotope-overlay">
                                                                    <a href="#">
                                                                      web development
                                                                    </a>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </section>
                                                  <section id="clients" classname="clients">
                                                    <div classname="section-heading text-center">
                                                      <h2>clients</h2>
                                                    </div>
                                                    <div classname="clients-area">
                                                      <div classname="container">
                                                        <div classname="owl-carousel owl-theme" id="client">
                                                          <div classname="item">
                                                            <a href="#">
                                                              <img src="assets/images/clients/c1.png" alt="brand-image" />
                                                            </a>
                                                          </div>
                                                          <div classname="item">
                                                            <a href="#">
                                                              <img src="assets/images/clients/c2.png" alt="brand-image" />
                                                            </a>
                                                          </div>
                                                          <div classname="item">
                                                            <a href="#">
                                                              <img src="assets/images/clients/c3.png" alt="brand-image" />
                                                            </a>
                                                          </div>
                                                          <div classname="item">
                                                            <a href="#">
                                                              <img src="assets/images/clients/c4.png" alt="brand-image" />
                                                            </a>
                                                          </div>
                                                          <div classname="item">
                                                            <a href="#">
                                                              <img src="assets/images/clients/c5.png" alt="brand-image" />
                                                            </a>
                                                          </div>
                                                          <div classname="item">
                                                            <a href="#">
                                                              <img src="assets/images/clients/c6.png" alt="brand-image" />
                                                            </a>
                                                          </div>
                                                          <div classname="item">
                                                            <a href="#">
                                                              <img src="assets/images/clients/c7.png" alt="brand-image" />
                                                            </a>
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </section>
                                                  &lt;
                                                  <section id="contact" classname="contact">
                                                    <div classname="section-heading text-center">
                                                      <h2>contact me</h2>
                                                    </div>
                                                    <div classname="container">
                                                      <div classname="contact-content">
                                                        <div classname="row">
                                                          <div classname="col-md-offset-1 col-md-5 col-sm-6">
                                                            <div classname="single-contact-box">
                                                              <div classname="contact-form">
                                                                <form>
                                                                  <div classname="row">
                                                                    <div classname="col-sm-6 col-xs-12">
                                                                      <div classname="form-group">
                                                                        <input type="text" classname="form-control" id="name" placeholder="Name*" name="name" />
                                                                      </div>
                                                                    </div>
                                                                    <div classname="col-sm-6 col-xs-12">
                                                                      <div classname="form-group">
                                                                        <input type="email" classname="form-control" id="email" placeholder="Email*" name="email" />
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div classname="row">
                                                                    <div classname="col-sm-12">
                                                                      <div classname="form-group">
                                                                        <input type="text" classname="form-control" id="subject" placeholder="Subject" name="subject" />
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div classname="row">
                                                                    <div classname="col-sm-12">
                                                                      <div classname="form-group">
                                                                        <textarea classname="form-control" rows="{8}" id="comment" placeholder="Message" defaultvalue="{&quot;&quot;}" defaultValue={"                </div>\n              </div>\n            </div>\n            <div className=\"row\">\n              <div className=\"col-sm-12\">\n                <div className=\"single-contact-btn\">\n                  <a className=\"contact-btn\" href=\"#\" role=\"button\">submit</a>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div className=\"col-md-offset-1 col-md-5 col-sm-6\">\n      <div className=\"single-contact-box\">\n        <div className=\"contact-adress\">\n          <div className=\"contact-add-head\">\n            <h3>browny star</h3>\n            <p>uI/uX designer</p>\n          </div>\n          <div className=\"contact-add-info\">\n            <div className=\"single-contact-add-info\">\n              <h3>phone</h3>\n              <p>987-123-6547</p>\n            </div>\n            <div className=\"single-contact-add-info\">\n              <h3>email</h3>\n              <p>browny@info.com</p>\n            </div>\n            <div className=\"single-contact-add-info\">\n              <h3>website</h3>\n              <p>www.brownsine.com</p>\n            </div>\n          </div>\n        </div>\n        <div className=\"hm-foot-icon\">\n          <ul>\n            <li><a href=\"#\"><i className=\"fa fa-facebook\" /></a></li>{/*/li*/}\n            <li><a href=\"#\"><i className=\"fa fa-dribbble\" /></a></li>{/*/li*/}\n            <li><a href=\"#\"><i className=\"fa fa-twitter\" /></a></li>{/*/li*/}\n            <li><a href=\"#\"><i className=\"fa fa-linkedin\" /></a></li>{/*/li*/}\n            <li><a href=\"#\"><i className=\"fa fa-instagram\" /></a></li>{/*/li*/}\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n    </div>\n  </section>\n  <footer id=\"footer-copyright\" className=\"footer-copyright\">\n    <div className=\"container\">\n<div className=\"hm-footer-copyright text-center\">\n  <p>\n    © copyright yourname. design and developed by <a href=\"https://www.themesine.com/\">themesine</a>\n  </p>\n</div>\n    </div>\n    <div id=\"scroll-Top\">\n<div className=\"return-to-top\">\n  <i className=\"fa fa-angle-up \" id=\"scroll-top\" />\n</div>\n    </div>\n  </footer>\n  )\n  {'}'}\n  export default App\n</div>\n"} /></div></div></div></form></div></div></div></div></div></div></section></i></i></i></i></i></i></i></i></i></i></i></i></div></div></div></div></section></i></i></i></i></i></i></div></div>
