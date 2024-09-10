class LandingPage
{

    get currentAge()
    {
         return $('#current-age')

    }

    get retirementAge(){
        return $('#retirement-age')
    }

    get currentIncome(){
        return $('//input[@id="current-income"]')
    }

    async sendValueOnCurrentIncome(value){
        await this.currentIncome.click()
        await this.currentIncome.setValue(value)
    }


    async sendValueOncurrentTotalSavings(value){
        await this.currentTotalSavings.click()
        await this.currentTotalSavings.setValue(value)
    }

    async sendValueOnsocialSecurityOverride(value){
        await this.socialSecurityOverride.click()
        await this.socialSecurityOverride.setValue(value)
    }

    async sendValueOnAdditionalIncome(value){
        await this.additionalIncome.click()
        await this.additionalIncome.setValue(value)

    }

    async sendValueonExpectedInflationRate(value){
        await this.expectedInflationRate.click()
        await this.expectedInflationRate.setValue(value)
    }

    async sendValueOnRetirementAnnualIncome(value){
        await this.retirementAnnualIncome.click()
        await this.retirementAnnualIncome.setValue(value)
    }

    async sendValueOnPreRetirementROI(value){
        await this.preRetirementROI.click()
        await this.preRetirementROI.setValue(value)
    }

    async sendValueOnPostRetirementROIvalue(value){
        await this.postRetirementROI.click()
        await this.postRetirementROI.setValue(value)
    }

    get currentTotalSavings(){
        return $('#current-total-savings')
    }

    get currentAnnualSavings(){
        return $('#current-annual-savings')
    }
    get savingsInterestRate(){
        return $('#savings-increase-rate')
    }

    get selectYesOptionForSocialBenefits(){
        return $('label[for="yes-social-benefits"]')
    }

    get married(){
       return $('label[for="married"]')
    }

    get socialSecurityOverride(){
        return $('#social-security-override')
    }

    get adjustDefaultValues(){
        return $('[data-target="#default-values-modal"]')
    }
    get additionalIncome(){
        return  $('#additional-income')
    }

    get retirementDuration(){
        return $('#retirement-duration')
    }
    get includeInflation(){
        return $('label[for="include-inflation"]')
    }

    get expectedInflationRate(){
        return  $('#expected-inflation-rate')
    }

    get retirementAnnualIncome(){
    return $('#retirement-annual-income')
    }

    get preRetirementROI(){
        return $('#pre-retirement-roi')
    }

    get postRetirementROI(){
        return  $('#post-retirement-roi')
    }

    get saveChanges(){
    return $('//button[normalize-space()="Save changes"]')
    }

    get calculate(){
    return $('//button[normalize-space()="Calculate"]')
    }


   
    
    
   
    
    
   
    
    

}
module.exports =new LandingPage()