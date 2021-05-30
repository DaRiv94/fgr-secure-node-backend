const KubernetesFunFacts = require('./models/Kubernetesfunfacts');
const MicrosoftFunFacts = require('./models/Microsoftfunfact');

insert_startup_data()

async  function insert_startup_data(){

    //Insert data for kubernetes fun facts
    await KubernetesFunFacts.create({ fun_fact: "Kubernetes is a container orchestration system"});
    await KubernetesFunFacts.create({ fun_fact: "Kubernetes is first released in 2014"});
    await KubernetesFunFacts.create({ fun_fact: "Kubernetes has its first KubeCon in 2015"});
    await KubernetesFunFacts.create({ fun_fact: "Kubernetes package manager Helm is introduced in 2016"});
    await KubernetesFunFacts.create({ fun_fact: "Kubernetes is introduced to Microsoft Azure as Azure Kubernetes Service in 2017"});
    
    //Insert data for Microsoft fun facts
    await MicrosoftFunFacts.create({ fun_fact: "Bill Gates and Paul Allen start Microsoft in 1975"});
    await MicrosoftFunFacts.create({ fun_fact: "Microsoft launches MS-DOS in 1981"});
    await MicrosoftFunFacts.create({ fun_fact: "Microsoft launches Windows 95 in 1995"});
    await MicrosoftFunFacts.create({ fun_fact: "Microsoft launches the Xbox in 2001"});
    await MicrosoftFunFacts.create({ fun_fact: "Microsoft launches Microsoft Azure in 2008"});

}
