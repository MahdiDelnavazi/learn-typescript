// decorators for change how class and members behave
// its like extend
function Component (constructor: Function){
    console.log('component decorator called');
    constructor.prototype.uniqueId = Date.now();
}

@Component
class ProfileComponent {
}

let profile = new ProfileComponent();
