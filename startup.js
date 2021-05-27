const KubernetesFunFacts = require('./models/Kubernetesfunfacts');
const MicrosoftFunFacts = require('./models/Microsoftfunfact');

insert_startup_data()

async  function insert_startup_data(){

    //Insert data for kubernetes fun facts
    await KubernetesFunFacts.create({ fun_fact: "kubernetes is cool"});
    await KubernetesFunFacts.create({ fun_fact: "kubernetes is wild"});
    await KubernetesFunFacts.create({ fun_fact: "kubernetes is awesome"});
    
    //Insert data for Microsoft fun facts
    await MicrosoftFunFacts.create({ fun_fact: "microsoft is a company"});
    await MicrosoftFunFacts.create({ fun_fact: "Microsoft has people"});
    await MicrosoftFunFacts.create({ fun_fact: "Microsoft owns windows"});

}