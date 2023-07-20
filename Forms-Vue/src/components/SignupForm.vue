<template>
    <div>
    <form>
        <label>Email</label>
        <input type="email" required v-model="email" />
        <label>Password</label>
        <input type="password" required v-model="password" />
        <label>Role</label>
        <select v-model="role">
            <option selected>Select</option>
            <option>Dev</option>
            <option>Designer</option>
        </select>
        <label>Skills</label>
        <input type="type" required @keyup="addSkills" v-model="skill" />
        <div @click="removeSkill(ele)" class="pill" v-for="ele in skills">
            {{ele}}
        </div>
        <div class="terms">
            <input type="checkbox" v-model="tnc">
            <label >Terms and conditions</label>
        </div>
        <div class="terms">
            <input type="checkbox" value="Anurag" v-model="names">
            <label >Anurag</label>
            <input type="checkbox" value="Nymph" v-model="names">
            <label >Nymph</label>
            <input type="checkbox" value="Nachiket" v-model="names">
            <label >Nachiket</label>
        </div>
        <div class="submit">
            <button>Submit</button>
        </div>
    </form>
        <p>{{email}}-{{password}}-{{role}}-{{tnc}}</p>
        <p>Names - {{names}}</p>
        <p>{{skills}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            role:'',
            tnc:false,
            names:[],
            skill:'',
            skills:[]
        }
    },
    methods:{
        addSkills(e){
            if(e.key==="," && this.skill){
                if(!this.skills.includes(this.skill.slice(0,-1))){
                    this.skills.push(this.skill.slice(0,-1))
                }
                this.skill = ''
            }  
        },
        removeSkill(tempSkill){
            this.skills = this.skills.filter(skill=>skill!=tempSkill)
        }   
    }
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: lightgray;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: gray;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
p{
    text-align: center;
}

.pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
}

.terms{
    display: flex;
    margin: 10px 0;
}
.terms input{
    padding: 0;
    width: auto;
    margin: 13px 5px 0 0;
}
.terms label{
    margin-right: 5px;
}
 button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    font-weight: 600;
    font-size: 16px;
  }
  .submit {
    display: flex;
    text-align: center;
    justify-content: start;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  } 
</style>