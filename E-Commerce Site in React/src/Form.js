import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, } from "reactstrap"
import alertify from 'alertifyjs'

export default class Form1 extends Component {
    state= {userName:"",
            password:"",
            email:"",
            city:""
            }
            onChange = (c)=>{
                this.setState({[c.target.name]: c.target.value})
            }
            onSubmit=(c)=>{
                c.preventDefault()
                alertify.success("Giriş Başarılı ! !")
                alertify.success("Kullanıcı Adı = "+ this.state.userName+" <br> Şifre = "+ this.state.password + "<br>Email = " + this.state.email + "<br>şehir = " + this.state.city); 
            }
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email"  placeholder="Email Gİriniz" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">UserName</Label>
                        <Input type="text" name="userName"  placeholder="Kullanı Adı Gİriniz" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" placeholder="Şifrenizi Giriniz" onChange={this.onChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Şehir</Label>
                        <Input type="select" name="city" onChange={this.onChange}>
                            <option>Ankara</option>
                            <option>İstanbul</option>
                            <option>İzmir</option>
                            <option>Adana</option>
                            <option>Mersin</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Giriş</Button>
                </Form>

            </div>
        )
    }
}
