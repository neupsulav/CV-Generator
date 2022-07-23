const getNewWorkExpField = () => {

    console.log('its working fine')
    let newobj = document.createElement('textarea')
    newobj.classList.add('form-control')
    newobj.classList.add('WEobj')
    newobj.classList.add('mt-2')
    newobj.setAttribute('rows', 3)
    newobj.setAttribute('placeholder', 'Enter your work experience')


    let workExperienceObj = document.querySelector('.workExperience')
    let addbuttonforWEObj = document.querySelector('.addbuttonforWE')

    workExperienceObj.insertBefore(newobj, addbuttonforWEObj)

}

const getNewAcadQualField = () => {
    let newobj = document.createElement('textarea')
    newobj.classList.add('form-control')
    newobj.classList.add('AQobj')
    newobj.classList.add('mt-2')
    newobj.setAttribute('rows', 3)
    newobj.setAttribute('placeholder', 'Enter your Academic Qualification')

    let academicqualificationObj = document.querySelector('.academicqualification')
    let addbuttonforAQObj = document.querySelector('.addbuttonforAQ')

    academicqualificationObj.insertBefore(newobj, addbuttonforAQObj)
}

const getNewPersonalValField = () => {
    let newobj = document.createElement('input')
    newobj.classList.add('form-control')
    newobj.classList.add('PVobj')
    newobj.classList.add('mt-2')
    newobj.setAttribute('placeholder', 'Enter your Personal Values')

    let personalValuesObj = document.querySelector('.personalvalues')
    let addbuttonforPVObj = document.querySelector('.addbuttonforPV')

    personalValuesObj.insertBefore(newobj, addbuttonforPVObj)
}

const getNewExpertiseField = () => {
    let newobj = document.createElement('input')
    newobj.classList.add('form-control')
    newobj.classList.add('Exobj')
    newobj.classList.add('mt-2')
    newobj.setAttribute('placeholder', 'Enter your Expertise')

    let expertiseObj = document.querySelector('.expertise')
    let addbuttonforExObj = document.querySelector('.addbuttonforExpertise')

    expertiseObj.insertBefore(newobj, addbuttonforExObj)
}

const getNewLanguageField = () => {
    let newobj = document.createElement('input')
    newobj.classList.add('form-control')
    newobj.classList.add('Lgobj')
    newobj.classList.add('mt-2')
    newobj.setAttribute('placeholder', 'Enter languages you know')

    let languageObj = document.querySelector('.language')
    let addbuttonforLgObj = document.querySelector('.addbuttonforLanguage')

    languageObj.insertBefore(newobj, addbuttonforLgObj)
}

const getNewInterestsField = () => {
    let newobj = document.createElement('input')
    newobj.classList.add('form-control')
    newobj.classList.add('Inobj')
    newobj.classList.add('mt-2')
    newobj.setAttribute('placeholder', 'Enter your interests')

    let interestsObj = document.querySelector('.interests')
    let addbuttonforInObj = document.querySelector('.addbuttonforInterests')

    interestsObj.insertBefore(newobj, addbuttonforInObj)
}

const getNewSkillField = () => {
    let newobj = document.createElement('input')
    newobj.classList.add('form-control')
    newobj.classList.add('Sklobj')
    newobj.classList.add('mt-2')
    newobj.setAttribute('placeholder', 'Enter your skills')

    let skillsObj = document.querySelector('.skill')
    let addbuttonforSklObj = document.querySelector('.addbuttonforSKL')

    skillsObj.insertBefore(newobj, addbuttonforSklObj)

}


const generateCVFunction = () => {

    //for hiding and showing forms and CV
    // document.querySelector('.CV-form').style.display = 'none'
    // document.querySelector('.CV-form')..display = 'none'
    document.getElementById('CV-form').style.display = "none"
    document.getElementById('CV-section').style.visibility = "visible"
    document.getElementById('printcvbtn').style.display = "block"

    // for name 
    let namefield = document.getElementById('namefield').value
    let name = document.querySelector('.name').innerHTML = namefield

    // objective
    let objective = document.getElementById('Objectivefield').value
    let objectivefield = document.querySelector('.info').innerHTML = objective

    // phone number
    let phoneNum = document.getElementById('contactfield').value
    let phoneInfo = document.getElementById('phoneNo').innerHTML = phoneNum

    // Birth date 
    let birthdate = document.getElementById('birthdatefield').value
    let birthinfo = document.getElementById('birth').innerHTML = birthdate

    // Mail ID 
    let mailID = document.getElementById('mailfield').value
    let mailinfo = document.getElementById('mail').innerHTML = mailID

    //Address
    let address = document.getElementById('addressfield').value
    let addressinfo = document.getElementById('address').innerHTML = address

    // facebook link
    // let facebookfb = document.getElementById('facebookfield').value
    // let facebooklink = document.getElementById('facebookicon').link('facebookfb')

    // instagram link

    // github link

    // work experience 
    let workexp = document.getElementsByClassName('WEobj')
    let workValue = ''

    for (let e of workexp) {
        workValue = workValue + `<li>${e.value}</li>`
    }
    document.querySelector('.work').innerHTML = workValue

    // personal values 
    let personalvalue = document.getElementsByClassName('PVobj')
    let valuesarray = ''

    for (let e2 of personalvalue) {
        valuesarray = valuesarray + `<li>${e2.value}</li>`
    }
    document.getElementById('personalvaluesdiv').innerHTML = valuesarray

    // expertise 
    let expertisevalue = document.getElementsByClassName('Exobj')
    let expertisearray = ''

    for (let e3 of expertisevalue) {
        expertisearray = expertisearray + `<li>${e3.value}</li>`
    }
    document.getElementById('expertisevaluediv').innerHTML = expertisearray

    // language
    let languagevalue = document.getElementsByClassName('Lgobj')
    let languagearray = ''

    for (let e4 of languagevalue) {
        languagearray = languagearray + `<li>${e4.value}</li>`
    }
    document.getElementById('languagevaluediv').innerHTML = languagearray

    // interests 
    let interestvalue = document.getElementsByClassName('Inobj')
    let interestarray = ''

    for (e5 of interestvalue) {
        interestarray = interestarray + `<li>${e5.value}</li>`
    }
    document.getElementById('interestvaluediv').innerHTML = interestarray

    // skills 
    let skillvalue = document.getElementsByClassName('Sklobj')
    let skillarray = ''

    for (e6 of skillvalue) {
        skillarray = skillarray + `<li>${e6.value}</li>`
    }
    document.getElementById('skillsname').innerHTML = skillarray

    // academic qualification
    let academivalue = document.getElementsByClassName('AQobj')
    let academicarray = ''

    for (e7 of academivalue) {
        academicarray += `<li>${e7.value}</li>`
    }
    document.getElementById('academicqualificationsdiv').innerHTML = academicarray

    // image 
    let imagevalue = document.getElementById('displayimage').files[0]
    let reader = new FileReader()
    reader.readAsDataURL(imagevalue)
    reader.onload = () => {
        document.getElementById('myimg').src = reader.result
    }

}