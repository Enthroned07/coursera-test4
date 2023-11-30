const names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Tobi", "Jack", "Frank", "Larry", "Paula", "Laura", "Jim"]
for (let i = 0; i < names.length; i++) {
    const currentName = names[i];

    if (currentName.charAt(0).toLowerCase() === 'j') {
        console.log(`Goodbye ${currentName}`);
    }else{
        console.log(`Hello ${currentName}`);
    }
    
}