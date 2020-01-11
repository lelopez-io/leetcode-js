# Setting up a test environment for interview questions
I'll be using macOS but most of these tools are available on linux 
Windows systems may require you use different tools that what I have

## Get NVM to manage multiple node version
[GitHub - nvm-sh/nvm: Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions](https://github.com/nvm-sh/nvm#install--update-script)

1. Install
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
```

2. Add to profile
This is added to whatever shell profile you are using. Usually `.bashrc` or `.zshrc`
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

3. Reload profile
should only have to load the one you edited
```bash
source ~/.zshrc
source ~/.bashrc
```

4. Verify NVM is installed
```bash
nvm -v
```

## Install Node
Now that NVM is installed, this becomes really simple. 
Unless you need a specific version, you can install the Latest LongTermSupport

1. Install
```bash
nvm install --lts
```

2. Verify install
```bash
node -v

which node
which npm
```

## Prepare Project Folder


1. Initialize the folder
```bash
npm init -y
```

2. Install mocha and should
```bash
npm install --save-dev mocha should
```

3. Create the Test File
```js
/* test/test.js */
var should = require("should");

describe("Array", function() {
  describe("#indexOf()", function() {
    it("should return -1 when the value is not present", function() {
      [1, 2, 3].indexOf(5).should.equal(-1);
    });
  });
});
```









