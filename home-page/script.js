let gatewayHTML = `<div class="container-gateway">
                    <div class="gateway-title">
                    Gateway of Accatease
                    <i class="fa fa-close close" style="font-size:20px"></i>
                    </div>
                    <div class="gateway-box">
                        <div class="gateway-elements-title">
                            MASTERS
                        </div>
                            <div class="master-options">
                                <div class="gateway-title-option create" id="master-create">Create</div>
                                <div class="gateway-title-option">Alter</div>
                                <div class="gateway-title-option">Chart of Accounts</div>
                            </div>
                        <div class="gateway-elements-title">
                            TRANSACTIONS
                        </div>
                            <div class="transactions-options">
                                <div class="gateway-title-option">Vouchers</div>
                                <div class="gateway-title-option">Day Book</div>
                            </div>
                        <div class="gateway-elements-title">
                            UTILITIES
                        </div>
                            <div class="utilities-options">
                                <div class="gateway-title-option">Banking</div>
                            </div>
                        <div class="gateway-elements-title">
                            REPORTS
                        </div>
                            <div class="reports-options">
                                <div class="gateway-title-option">Balance Sheet</div>
                                <div class="gateway-title-option">Profit and Loss A/c</div>
                                <div class="gateway-title-option">Stock Summary</div>
                                <div class="gateway-title-option">Ratio Analysis</div>
                                <div class="gateway-title-option">Display more reports</div>
                            </div>
                        <div class="gateway-elements-title" id="quit">QUIT</div>
                    </div>
                </div>`;

let companyCodesHTML = `<div class="container-gateway">
                <div class="gateway-title">
                    List of Country Codes
                    <i class="fa fa-close close" style="font-size:20px"></i>
                </div>

                <div class="above-country-code-box">
                    <div class="new-country-code above-country-code-options">New Country Code</div>
                    <div class="show-more-country-codes above-country-code-options">Show More</div>
                </div>

                <div class="country-code-options">
                    <div class="country">
                        <div class="country-code">+1</div>
                        <div class="country-code-name">United States of America</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+20</div>
                        <div class="country-code-name">Egypt</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+231</div>
                        <div class="country-code-name">Liberia</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+233</div>
                        <div class="country-code-name">Ghana</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+234</div>
                        <div class="country-code-name">Nigeria</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+254</div>
                        <div class="country-code-name">Kenya</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+255</div>
                        <div class="country-code-name">Tanzania</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+256</div>
                        <div class="country-code-name">Uganda</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+260</div>
                        <div class="country-code-name">Zambia</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+265</div>
                        <div class="country-code-name">Malawi</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+267</div>
                        <div class="country-code-name">Botswana</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+27</div>
                        <div class="country-code-name">South Africa</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+44</div>
                        <div class="country-code-name">UK</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+60</div>
                        <div class="country-code-name">Malaysia</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+62</div>
                        <div class="country-code-name">Indonesia</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+63</div>
                        <div class="country-code-name">Phillippines</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+65</div>
                        <div class="country-code-name">Singapore</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+66</div>
                        <div class="country-code-name">Thailand</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+852</div>
                        <div class="country-code-name">Hong Kong</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+880</div>
                        <div class="country-code-name">Bangladesh</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+91</div>
                        <div class="country-code-name">India</div>
                    </div>
                    <div class="country">
                        <div class="country-code">+94</div>
                        <div class="country-code-name">Sri Lanka</div>
                    </div>
                </div>
            </div>`;


let noneHTML = ``;


function gateway() {
    // changing the container to gateway options
    document.querySelector(".page-right").innerHTML = gatewayHTML;

    // closing the container
    document.querySelector(".close").addEventListener("click",gatewayremove);
}

function gatewayremove() {
    // closing the container to nothing on the right side of home page
    document.querySelector(".page-right").innerHTML = noneHTML;
}

function showCompanyCodes() {
    
    //showing company codes list
    document.querySelector(".page-right").innerHTML = companyCodesHTML;

    // closing the container
    document.querySelector(".close").addEventListener("click",gatewayremove);

    // storing the array of the countries listed
    let countryArray = document.getElementsByClassName("country");
    console.log(countryArray);

    // iterating on every country and adding redirect functions
    for (const element of countryArray) {
        element.addEventListener("click",companyCreationRedirect)
    }
    
}

function companyCreationRedirect() {
    window.location.href = "/SBMS/company-creation/index.html";
}

function main() {
    //adding the container of gateway as innerHTML
    document.querySelector(".go-to").addEventListener("click",gateway);

    // showing list of country codes when clicked F3 or clicked on company from sidebar
    document.querySelector("#company").addEventListener("click",showCompanyCodes);
}
main();
