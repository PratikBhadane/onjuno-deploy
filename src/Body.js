import React from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Jumbotron, Button, Card , InputGroup, FormControl, Container, Row, Col, Image,Badge,ProgressBar} from 'react-bootstrap'
import './Body.css'
function Checking_Acc()
{
    

    return <div>
    <div className='row nav' style={{marginTop:'100px'}}>
        <div className='col-md-8'>
        <Jumbotron>
            <h1>
              The Most Powerfull
             <br/> Checking Account
            </h1>
  
            <p className="mb-3 text-muted  heading-1">
                
                     Our checking account gives you higher returns than <br/> a savings account with no hidden fees.
                
            </p>
           
            <Card>
               <Card.Body>
                    
                <InputGroup size="lg">
                       <span className="glyphicon glyphicon-envelope" aria-hidden="true"></span>
                    
               
                    
                    
                    
                    <FormControl id='input' placeholder="Enter Email Address" aria-label="Username" aria-describedby="inputGroup-sizing-sm" />
                    <Button variant="primary" id='Join'>Join Now</Button>
                </InputGroup>
                </Card.Body>
            </Card>

            <br/>
            <br/>
           
            <Container>
                <Row>
            
                    <Image id='usa-flag' src="data:image/png;base64,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"   />
                    <h2>
                       <small id='usa-text'>335 spots left for Priority Access </small>
                    </h2>   
                </Row>
            </Container>
            <br/>
            <Card className='app-store' style={{ width: '12rem' }}>
                <Card.Body>      
                    <i class="fab fa-google-play"></i>
                    
                    <Card.Subtitle className="mb-2 text-muted">Coming soon</Card.Subtitle>
                    <Card.Title className="mb-1 text-muted">Google Play</Card.Title>
                    
                </Card.Body>
            
            </Card>
            
            <Card className='app-store' style={{ width: '12rem' }}>
                <Card.Body>      
                    <i className="fab fa-google-play"></i>
                    
                    <Card.Subtitle className="mb-2 text-muted">Coming soon</Card.Subtitle>
                    <Card.Title className="mb-1 text-muted">App Store</Card.Title>
                    
                </Card.Body>
            </Card>
                        
           
           
           

        </Jumbotron>
        
        </div>

        <div className='col-md-4'>
        
        <Container>
            <Row>
            
                <Image id='mobile-card' src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-mobile-app%403x.png?webp"   />
                      
            </Row>
        </Container>
       
        </div> 
    </div>
        <br/>
        <br/>
        <br/>
        <div className="flex justify-center   "  style={{ margin:'20px 0px 0px 0px' }}>
            <h1 className="xs:xs-all-caps md:lg-all-caps item-gunmetal-gray">
              BACKED BY THE BEST
            </h1>
        </div>
        
        <div className='xs:flex-col md:flex-row flex justify-between xs:px-5 md:px-12 lg:px-20 ' style={{ margin:'80px 0px 0px 0px' }} >
            <img  id='sequioa' src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/sequioa-image%403x.png?webp" alt=""/>
            <img id='polichain-capital' src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/polychain-capital%403x.png?webp" alt=""/>      
            <img id='consensys' src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/consensys-logo%403x.png?webp" alt=""/>

        </div>
         
        <br/>
        

        <div className='row nav  text-div' align='left' style={{ display:'block'  }}>
            <div className='col-md-7'>
              <Jumbotron>
                <p id='blue-para'>Start saving for a rainy day fund</p>
                <p id='para-black'>Use Our Checking Account to Achieve Your Financial Goals</p>
                <div className='flex'>
                  <p>
                    With the latest Federal rate cut, the largest banks are offering close to 0% APY on their 
                    checking and savings accounts. OnJuno checking will earn you more than 20x the national
                    average*. Deposits up to $250,000 are FDIC insured through our partner bank. Grow your
                    idle money faster with our checking account and start saving towards a rainy day fund, 
                    big expense, or vacation.
                  </p>


                </div>
              </Jumbotron>
            </div>
            <div className='col-md-5'>
              <Jumbotron>
                 <img id='two-fifteen' src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/svg/juno-apy-215.svg?webp" alt=""/>
              </Jumbotron>
            </div>   



        </div>

        <div className='container justify-center ' id='products'>
            <div>
                <h1 className='text-center'>Sign up early to save more</h1>
                <h2 className='text-center mb-2 text-muted h2-sub-header'>
                    Depending on the level of your checking account, you’ll earn between 1.15% <sup>3</sup>  to 
                    2.15%<sup>1</sup> bonus rate.
                </h2>
            </div>
        
        </div>

        <div className=' justify-evenly' id='card-scheme' style={{ display:'block'  }}>
            
            <div className='row-nav'>
            <div className='col-md-4'>
                <Card style={{  }}>
                    <Card.Body>
                        <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-black-card%403x.png" width='100%'  alt=""/>
                        <Card.Title>
                             <p className='mb-2 card-para-one  text-center' >Metal</p>
                        </Card.Title>
                        <Card.Subtitle className="mb-2 two-fifteen-blue">2.15%<span><sup className='mb-2 text-muted'>1</sup></span></Card.Subtitle>
                        <Card.Text>
                            <div className='badge-div' style={{margin:'0px 0px 30px 0px'}}>
                                <h1>
                                <Badge variant="success" style={{display:'inline'}}>5%</Badge>
                                <span className='mb-2  text-muted badge-text text-center'>cash back</span> 
                                </h1>
                            
                            </div>
                            <hr/>
                            <div style={{margin:'30px 0px 0px 0px'}}>
                            
                                <h2> <span className='green-number'>2167</span><span className='mb-2 text-muted two-five-zero-zero'>/ 2500 </span> <span className='text-muted spot' >spots</span>  <span className='mb-2 text-muted two-five-zero-zero'>333</span>  <span className='text-muted '>spot left</span> </h2>
                                <div classname='progress-button'> 
                                    <ProgressBar variant="success"  now={86.68} />
                                    
                                    <Button variant="primary" className='blue-sign-up' size="lg" >
                                       Sign Up Now
                                    </Button>{' '}
                                </div>
                            </div>
                            <hr/>
                            <div className='flex' align='left'>
                               <h1 className='mb-2 text-muted letter-space' >Includes</h1>
                              
                               <div className='flex'>
                                  <p className='glyphi-ok'>
                                     <span  class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                  </p>
                                  <p className='para-with-glyphy'>Charcoal Black Metal Card</p>
                               </div>
                               <div className='flex'>
                                  <p className='glyphi-ok'>
                                     <span  class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                  </p>
                                  <p className='para-with-glyphy'>2.15%<sup>1</sup> Bonus Rate Checking Account</p>
                               </div>
                               <div className='flex'>
                                  <p className='glyphi-ok'>
                                     <span  class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                  </p>
                                  <p className='para-with-glyphy'>5% Cash back on brands you love</p>
                               </div>
                               <div className='flex'>
                                <p className='glyphi-ok'>
                                    <span  class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                </p>
                                <p className='para-with-glyphy'>Free Cash Withdrawals</p>
                               </div>
                               <div className='flex'>
                                <p className='glyphi-ok'>
                                    <span  class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                                </p>
                                <p className='para-with-glyphy'>Phone & Chat Support</p>
                               </div>
                            </div>
                            
                            <div className='flex big-para mb-2 text-muted'>
                                <p>Fund your account with a minimum opening deposit of <b> $1000. 3 </b> additional free ATM withdrawals per month from out of network ATMs.</p>
                            </div>
                           
                            <Card className='info-div'>
                            <div className='flex ' align='left'>
                               <p className='glyphi-ok' style={{display:'inline'}} >
                                  <span  class="glyphicon glyphicon-usd" aria-hidden="true"></span>
                               </p>
                               <del>
                                  <p className='dollar-para'>$11.99/m Membership Fee</p>
                               </del>
                               <div style={{marginLeft:'30px'}}>
                                    <p className='six-month'>Free For 6 Months</p>
                                    <p className='sixty-saving'>$60 Savings</p>
                               </div>
                            </div>
                            </Card>
                          

                        </Card.Text>
                        
                    </Card.Body>
                </Card>
               
            </div>

            <div className='col-md-4'>
            <Card style={{  }}>
            <Card.Body>
                <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-plus%403x.png" width='100%'  alt=""/>
                <Card.Title>
                     <p className='mb-2 card-para-one  text-center' >Premium</p>
                </Card.Title>
                <Card.Subtitle className="mb-2 one-six-five-black">1.65%<span><sup className='mb-2 text-muted'>2</sup></span></Card.Subtitle>
                <Card.Text>
                    <div className='badge-div' style={{margin:'0px 0px 30px 0px'}}>
                        <h1>
                        <Badge variant="default" style={{display:'inline'}}>4%</Badge>
                        <span className='mb-2  text-muted badge-text text-center'>cash back</span> 
                        </h1>
                    
                    </div>
                    <hr/>
                    <div style={{margin:'30px 0px 0px 0px'}}>
                    
                        <h2><span className='mb-2 text-muted two-five-zero-zero'> 2000 </span> <span className='text-muted spot' >spots</span>  <span className='mb-2 text-muted two-five-zero-zero'>2000</span>  <span className='text-muted'>spot left</span> </h2>
                        <div classname='progress-button'> 
                            <ProgressBar variant="success"  now={0} />
                            
                            <Button variant="default" className='grey-sign-up' size="lg" >
                               Up Next
                            </Button>{' '}
                        </div>
                    </div>
                    <hr/>
                    <div className='flex' align='left'>
                       <h1 className='mb-2 text-muted letter-space' >Includes</h1>
                      
                       <div className='flex'>
                          <p className='glyphi-ok'>
                             <span  class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                          </p>
                          <p className='para-with-glyphy'>Free Debit Card</p>
                       </div>
                       <div className='flex'>
                          <p className='glyphi-ok'>
                             <span  class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                          </p>
                          <p className='para-with-glyphy'>1.65%<sup>2</sup> Bonus Rate Checking Account</p>
                       </div>
                       <div className='flex'>
                          <p className='glyphi-ok'>
                             <span  class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                          </p>
                          <p className='para-with-glyphy'>4% Cash back on brands you love</p>
                       </div>
                       <div className='flex'>
                        <p className='glyphi-ok'>
                            <span  class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                        </p>
                        <p className='para-with-glyphy'>Free Cash Withdrawals</p>
                       </div>
                       <div className='flex'>
                        <p className='glyphi-ok'>
                            <span  class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                        </p>
                        <p className='para-with-glyphy'>Phone & Chat Support</p>
                       </div>
                    </div>
                    
                    <div className='flex big-para mb-2 text-muted'>
                        <p>Fund your account with a minimum opening deposit of  <b> $500. 2 </b> additional free ATM withdrawals per month from out of network ATMs.</p>
                    </div>
                   
                    <Card className='grey-div'>
                    <div className='flex ' align='left'>
                       <p className='glyphi-ok' style={{display:'inline'}} >
                          <span  class="glyphicon glyphicon-usd" aria-hidden="true"></span>
                       </p>
                       <del>
                          <p className='dollar-para'>$6.99/m Membership Fee</p>
                       </del>
                       <div style={{marginLeft:'30px'}}>
                            <p className='coming-soon-para  text-muted'>Coming Soon</p>
                          
                       </div>
                    </div>
                    </Card>
                  

                </Card.Text>
                
            </Card.Body>
        </Card>
       

            
        
        </div>

            
        <div className='col-md-4'>
            <Card style={{  }}>
            <Card.Body>
                <img src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/juno-basic%403x.png" width='100%'  alt=""/>
                <Card.Title>
                     <p className='mb-2 card-para-one  text-center' >Premium</p>
                </Card.Title>
                <Card.Subtitle className="mb-2 one-six-five-black">1.15%<span><sup className='mb-2 text-muted'>3</sup></span></Card.Subtitle>
                <Card.Text>
                    <div className='badge-div' style={{margin:'0px 0px 30px 0px'}}>
                        <h1>
                        <Badge variant="default" style={{display:'inline'}}>3%</Badge>
                        <span className='mb-2  text-muted badge-text text-center'>cash back</span> 
                        </h1>
                    
                    </div>
                    <hr/>
                    <div style={{margin:'30px 0px 0px 0px'}}>
                    
                        <h2><span className='mb-2 text-muted two-five-zero-zero'> 10000 </span> <span className='text-muted spot' >spots</span>  <span className='mb-2 text-muted two-five-zero-zero'>10000</span>  <span className='text-muted'>spot left</span> </h2>
                        <div classname='progress-button'> 
                            <ProgressBar variant="success"  now={0} />
                            
                            <Button variant="default" className='grey-sign-up' size="lg" >
                               Coming Soon
                            </Button>{' '}
                        </div>
                    </div>
                    <hr/>
                    <div className='flex' align='left'>
                       <h1 className='mb-2 text-muted letter-space' >Includes</h1>
                      
                       <div className='flex'>
                          <p className='glyphi-ok'>
                             <span  class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                          </p>
                          <p className='para-with-glyphy'>Free Debit Card</p>
                       </div>
                       <div className='flex'>
                          <p className='glyphi-ok'>
                             <span  class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                          </p>
                          <p className='para-with-glyphy'>1.15%<sup>3</sup> Bonus Rate Checking Account</p>
                       </div>
                       <div className='flex'>
                          <p className='glyphi-ok'>
                             <span  class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                          </p>
                          <p className='para-with-glyphy'>3% Cash back on brands you love</p>
                       </div>
                       <div className='flex'>
                        <p className='glyphi-ok'>
                            <span  class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                        </p>
                        <p className='para-with-glyphy'>Free Cash Withdrawals</p>
                       </div>
                       <div className='flex'>
                        <p className='glyphi-ok'>
                            <span  class="glyphicon glyphicon-ok" aria-hidden="true"></span>
                        </p>
                        <p className='para-with-glyphy'>Phone & Chat Support</p>
                       </div>
                    </div>
                    
                    <div className='flex big-para mb-2 text-muted ' >
                        <p>Fund your account with a minimum opening deposit of  <b> $0. </b></p>
                    </div>
                   
                    <Card className='grey-div' style={{marginTop:'59px'}}>
                    <div className='flex ' align='left'>
                       <p className='glyphi-ok' style={{display:'inline'}} >
                          <span  class="glyphicon glyphicon-usd" aria-hidden="true"></span>
                       </p>
                       
                          <p className='dollar-para'> No Membership Fee</p>
                       
                       <div style={{marginLeft:'30px'}}>
                            <p className='coming-soon-para  text-muted'>Free Forever!</p>
                          
                       </div>
                    </div>
                    </Card>
                  

                </Card.Text>
                
            </Card.Body>
        </Card>
       
    </div>

</div>
        </div>
       
        <div class="row">
            <div class ="col-md-2">
            
            </div>
        </div>
       
        
    </div>
    
}

export default Checking_Acc;