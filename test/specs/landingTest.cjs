const landingPage = require('../pageobjects/landingPage')

const fs = require('fs')
let credentials = JSON.parse(fs.readFileSync('test/testData/landingData.json'))

describe('Submit form with all required fields', async()=>
    {

              credentials.forEach( ({CurrentAge,RetirementAge,CurrentAnnualIncome,CurrentRetirementSavings,CurrentRetirementContribution,AnnualRetirementContributionIncrease}) => {
           it('Submit form with all fields filled in',async()=>{
            await browser.url('/insights-tools/retirement-calculator.html')
            await browser.maximizeWindow()
            console.log(await browser.getTitle())
            await expect(browser).toHaveTitle(expect.stringContaining('Securian Financial'))
            await landingPage.currentAge.setValue(CurrentAge)
            await landingPage.retirementAge.setValue(RetirementAge)
            await landingPage.sendValueOnCurrentIncome(CurrentAnnualIncome)
            await landingPage.sendValueOncurrentTotalSavings(CurrentRetirementSavings)
            await landingPage.currentAnnualSavings.setValue(CurrentRetirementContribution)
            await landingPage.savingsInterestRate.setValue(AnnualRetirementContributionIncrease)       
           })
       })

              credentials.forEach( ({SocialSecurityOverride}) => {
           it('Social Security fields should display/hide based on Social Security benefits toggle',async()=>{
            await landingPage.selectYesOptionForSocialBenefits.click()
            await landingPage.married.click()
            await landingPage.sendValueOnsocialSecurityOverride(SocialSecurityOverride)       
           })

       })

              credentials.forEach( ({AdditionalIncome,NumberofYearsRetirementNeedsToLast,expectedInflationRate,PercentofFinalAnnualIncomeDesired,PreretirementInvestmentReturn,PostretirementInvestmentReturn}) => {
           it(' Update default calculator values',async()=>{
            await landingPage.adjustDefaultValues.click()
            await browser.pause(2000)
            await landingPage.sendValueOnAdditionalIncome(AdditionalIncome)
            await landingPage.retirementDuration.setValue(NumberofYearsRetirementNeedsToLast)
            await landingPage.includeInflation.click()
            await landingPage.sendValueonExpectedInflationRate(expectedInflationRate)
            await landingPage.sendValueOnRetirementAnnualIncome(PercentofFinalAnnualIncomeDesired)
            await landingPage.sendValueOnPreRetirementROI(PreretirementInvestmentReturn)
            await landingPage.sendValueOnPostRetirementROIvalue(PostretirementInvestmentReturn)
            await landingPage.saveChanges.click()
           })
       })

           it('submit form with all fields',async()=>{
            await landingPage.calculate.click()
           })

    })