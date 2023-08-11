import React, { useState, useEffect } from 'react';
import './index.css';
import { useNavigate } from "react-router-dom";
      
const PlanSelect = () => {
    const [selectedPlan, setSelectedPlan] = useState("Mobile");
    const [pricing, setPricing] = useState("Monthly");
    const navigate = useNavigate(); 
  
    const handlePlanChange = (e) => {
      setSelectedPlan(e.target.value);
      if (e.target.value === "Mobile") {
        setPricing("Monthly");
      } else {
        setPricing("Yearly");
      }
    };
  
    const handlePricingChange = (e) => {
      setPricing(e.target.value);
    };
  
    const handleNextClick = () => {
      navigate('/card');
    };
  
    const PlanSelect = ({ children }) => {
      // ...
      const table = document.getElementById("plan-table");
      table.className = "plan-table";
  
      const thead = document.getElementById("plan-table-thead");
      thead.className = "plan-table-thead";
  
      const tr = document.getElementsByTagName("tr");
      for (let i = 0; i < tr.length; i++) {
        tr[i].className = "plan-table-tr";
      }
  
      const td = document.getElementsByTagName("td");
      for (let i = 0; i < td.length; i++) {
        td[i].className = "plan-table-td";
      }
  
      // ...
  
      const button = document.getElementById("plan-sel-next");
      button.addEventListener("click", handleNextClick);
  
      // ...
  
      const changeColor = (planId) => {
        const planCells = document.getElementsByClassName(`plan-${planId}-plan`);
        for (let i = 0; i < planCells.length; i++) {
          planCells[i].style.color = "red";
        }
      };
  
      return (
        <div>
          {children}
        </div>
      );
    };
    
    
    useEffect(() => {
      // DOM manipulation code
      document.querySelectorAll('input[name="pricing"]').forEach((input) =>
        input.addEventListener('change', function () {
          document.getElementById('plan-dur').innerHTML = `${this.getAttribute(
            'value'
          )} Price`;
          document.getElementById('plan-mobile').innerHTML = `₹${this.getAttribute(
            'mobile'
          )}`;
          document.getElementById('plan-basic').innerHTML = `₹${this.getAttribute(
            'basic'
          )}`;
          document.getElementById('plan-standard').innerHTML = `₹ ${this.getAttribute(
            'standard'
          )}`;
          document.getElementById('plan-premium').innerHTML = `₹ ${this.getAttribute(
            'premium'
          )}`;
        })
      );
  
      document.getElementById('plan-dur').innerHTML = 'Monthly Price';
      document.getElementById('plan-mobile').innerHTML = '₹100';
      document.getElementById('plan-basic').innerHTML = '₹200';
      document.getElementById('plan-standard').innerHTML = '₹500';
      document.getElementById('plan-premium').innerHTML = '₹700';
    }, []);


    return (
      <body id="sub-plans-body">
      <div className="sub-plans" id="sub-plans">
      <p className="head-text" id="choose-plan">Choose the right plan for you</p>


      <table>
          <tr>
            <th className='table-row-heading' id="p-toggle">
              <div class="pricing-toggle">
                <input type="radio" id="pricing-toggle-monthly" name="pricing" value="Monthly" mobile="100" basic="200" standard="500" premium="700" checked  /> 
                <label class="radio-button" for="pricing-toggle-monthly"> Monthly</label>
                <input type="radio" id="pricing-toggle-annually" name="pricing" value="Yearly" mobile="1000" basic="2000" standard="5000" premium="7000"/>
                <label class="radio-button" for="pricing-toggle-annually"> Yearly</label>
              </div>
            </th>

            <th className='table-col-heading mobile-plan' id="mob_cell" for="sel-mobile">
              <input type="radio" id="sel-mobile" name="plan-selection" value="Mobile"  />
              <label class="radio-button" for="sel-mobile"> Monthly</label>
            </th>
            <th className='table-col-spacing'></th>

            <th className='table-col-heading basic-plan' id="bsc_cell">
              <input type="radio" id="sel-basic" name="plan-selection" value="Basic" />
              <label class="radio-button" for="sel-basic"> Basic</label>
            </th>
            <th className='table-col-spacing'></th>

            
            <th className='table-col-heading standard-plan' id="std_cell">
              <input type="radio" id="sel-standard" name="plan-selection" value="Standard" />
              <label class="radio-button" for="sel-standard"> Standard</label>
            </th>
            
            <th className='table-col-spacing'></th>

            <th className='table-col-heading premium-plan' id="prem_cell">
              <input type="radio" id="sel-premium" name="plan-selection" value="Premium" />
              <label class="radio-button" for="sel-premium"> Premium</label>
            </th>
          </tr>
          <tr>
            <td id="ext-row"> </td>
          </tr>
          <tr>
            <td id="plan-dur" className='table-row-heading'>Monthly Price</td>
            <td id="plan-mobile" className='mobile-plan'>₹100</td>
            <td className='table-col-spacing'></td>
            <td id="plan-basic" className='basic-plan'>₹200</td>
            <td className='table-col-spacing'></td>
            <td id="plan-standard" className='standard-plan'>₹500</td>
            <td className='table-col-spacing'></td>
            <td id="plan-premium" className='premium-plan'>₹700</td>
            <td className='table-col-spacing'></td>
          </tr>
          <tr>
            <td className='table-row-heading table-top-border'>Video quality</td>
            <td className='table-top-border mobile-plan'>Good</td>
            <td className='table-col-spacing table-top-border'></td>
            <td className='table-top-border basic-plan'>Good</td>
            <td className='table-col-spacing table-top-border'></td>
            <td className='table-top-border standard-plan'>Better</td>
            <td className='table-col-spacing table-top-border'></td>
            <td className='table-top-border premium-plan'>Best</td>
          </tr>
          <tr>
            <td className='table-row-heading table-top-border'>Resolution</td>
            <td className='table-top-border mobile-plan'>480p</td>
            <td className='table-col-spacing table-top-border'></td>
            <td className='table-top-border basic-plan'>480p</td>
            <td className='table-col-spacing table-top-border'></td>
            <td className='table-top-border standard-plan'>1080p</td>
            <td className='table-col-spacing table-top-border'></td>
            <td className='table-top-border premium-plan'>4K+HDR</td>
          </tr>
          <tr>
            <td className='table-row-heading table-top-border'>Devices you can watch</td>
            <td className='table-top-border devices mobile-plan'>Phone</td>
            <td className='table-col-spacing table-top-border'></td>
            <td className='table-top-border devices basic-plan'>Phone</td>
            <td className='table-col-spacing table-top-border'></td>
            <td className='table-top-border devices standard-plan'>Phone</td>
            <td className='table-col-spacing table-top-border'></td>
            <td className='table-top-border devices premium-plan'>Phone</td>
          </tr>
          <tr>
            <td className='table-row-heading'> </td>
            <td className='devices mobile-plan'>Tablet</td>
            <td className='table-col-spacing'></td>
            <td className='devices basic-plan'>Tablet</td>
            <td className='table-col-spacing'></td>
            <td className='devices standard-plan'>Tablet</td>
            <td className='table-col-spacing'></td>
            <td className='devices premium-plan'>Tablet</td>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td className='table-col-spacing'></td>
            <td className='devices basic-plan'>Computer</td>
            <td className='table-col-spacing'></td>
            <td className='devices standard-plan'>Computer</td>
            <td className='table-col-spacing'></td>
            <td className='devices premium-plan'>Computer</td>
          </tr>
          <tr>
            <td> </td>
            <td> </td>
            <td className='table-col-spacing'></td>
            <td className='devices basic-plan'>TV</td>
            <td className='table-col-spacing'></td>
            <td className='devices standard-plan'>TV</td>
            <td className='table-col-spacing'></td>
            <td className='devices premium-plan'>TV</td>
          </tr>
        </table> <br />
        
        <input type="submit" value="Next" id="plan-sel-next" className='submit' onClick={handleNextClick} />
      </div>

      </body>
    );
}


export default PlanSelect; 