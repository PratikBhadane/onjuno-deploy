import React from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Body2.css';
import { Jumbotron} from 'react-bootstrap'

function BodyTwo()
{


    return <div>
      <div className='container' style={{marginTop:'80px'}} align='left'>
      
         <h1 id='five-percent-heading' align='center'>Get <span id='five-percent'>5% cash back</span> on 5 brands you love</h1>
         <h2 align='center' id='below-five-per-head' className='mb-2 text-muted' >OnJuno Debit Card rewards you like a credit card without the high fees and debt</h2>
      
      </div>

      <div className='container jumbo' style={{marginTop:'80px'}}>
      
      <div class="row">
        <div class ="col-md-3">
            <div className='three-col'>
                <p align='left' class='three-col-para-one'>No points, direct cash back</p>
                <p align='left' class='three-col-para-two text-muted'>Earn 5% cash back on 5 brands you love, up to $3,000 per year in spends.</p>
            </div>
        </div>

        <div class ="col-md-6">
           <div>
              <img id='two-card-img' src="https://juno-public.s3-us-west-1.amazonaws.com/Juno/cards%403x.png?webp" alt=""/>
           </div>
        </div>

        <div class ="col-md-3">
            <div className='three-col'>
                <p class='three-col-para-one' align='right'>Access to cash, anytime</p>
                <p align='right' class='three-col-para-two text-muted'>Enjoy free cash withdrawals at 85,000+ ATMs across our partners' ATM network</p>
            </div>
        </div>

      </div>

      <div>            
          <button id='merchat-btn' className='btn btn-primary'>View All Merchants</button>
      </div>

      
      </div>
   
    </div>
}
export default BodyTwo; 