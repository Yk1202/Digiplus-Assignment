function Addnode(){
    if(document.getElementById('nodetype').value && document.getElementById('nodename')){
        let type = document.getElementById('nodetype').value;
        let value = document.getElementById('nodename').value;
        console.log(type);
        console.log(value);
        const data = fetch('./dummy.json');
        const jsonData = JSON.parse(data);
        data.nodes.push({
            ntype: type,
            nvalue: value,
          });
        const jsonString = JSON.stringify(jsonData);
        console.log(jsonString);

        fs.writeFileSync('data.json', jsonString, 'utf-8', (err) => {
        if (err) throw err;
        console.log('Data added to file');
        });

    }
    else{
        console.log('Warning!! Enter node value or select a dropdown')
    }

  }