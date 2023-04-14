/// <reference types='cypress' />

describe('API Training',()=>{
    
    const accessToken = 'e5cafe1d03f3951097bc53c92dfd1b344ec8808b9e033843221b4a0f96b8ea58'
    let randonNumber =Math.floor(Math.random()*10)
    let emailStr = 'qwerty_'+randonNumber + '@healthcote.com'
    let users

    before('Loading Data For POST Call',function(){
         cy.fixture('apidata').then((data)=>{
             this.data = data
         })
    })

    it.skip('Scenario01: GET All Resource',()=>{

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            header: {
                authorization: 'Bearer '+accessToken
            }
        }).then(res =>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body).to.be.a('array')
            expect(res.body).to.have.length(10)
            expect(res.body[5]['email']).to.eq('ganaka_dr_ghanshyam@heathcote.com')
            expect(res.body[5]['name']).to.eq('Dr. Ghanshyam Ganaka')
            expect(res.body[5].id).to.eq(8775)
        })
    })

    it.skip('Scenario02: GET Specific Resource',()=>{

        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/55064',
            header: {
                authorization: 'Bearer '+accessToken
            }
        }).then(res =>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body).to.be.a('object')
            expect(res.body['email']).to.eq('ganaka_dr_ghanshyam@heathcote.com')
            expect(res.body['name']).to.eq('Dr. Ghanshyam Ganaka')
            
        })
    })

it('Scenario03: POST Method',function(){
    
    cy.request({
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users',
        headers: {
            "authorization": "Bearer "+accessToken
        },
        body: {
             "email": emailStr,
              "gender": this.data.gender,
              "name":  this.data.name,
              "status": this.data.status
  }
    }).then(res=>{
        cy.log(JSON.stringify(res))
        expect(res.status).to.eq(201)
    })
})
it.skip('PATCH Http Request', ()=>{

    cy.request({
        method: 'PATCH',
        url: 'https://gorest.co.in/public/v2/users/267',

        headers: {
            authorization: 'Bearer '+accessToken
        },
        body:{
            "name":"Saniya Malhotra"
        }

    }).then((res)=>{
        cy.log(JSON.stringify(res))
        expect(res['body']['gender']).to.eq('male')
    })
})

it.skip('PUT http req',()=>{
    cy.request({
        method: 'PUT',
        url : 'https://gorest.co.in/public/v2/users/267',

        headers: {

            authorization: 'Bearer '+accessToken
        },
        body: 
            {
    
                "name": 'Christian Bale',
                "email": "bale@kris.name",
                "gender": "male",
                "status": "active"
              }
        
    }).then(res=>{
        cy.log(JSON.stringify(res))
    })
})
it.skip('Delete Http Req', ()=>{

    cy.request({
        method: 'DELETE',
        url: 'https://gorest.co.in/public/v2/users/647',

        headers: {
            authorization: 'Bearer '+accessToken
        }
    }).then(res =>{
       expect(res).to.eq(204)
    })
})
})