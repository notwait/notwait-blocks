const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADTUlEQVRIS63VTWgUZxgH8P+7Mzsf+2U2SrPJKBoEA1WKUMzupaKHpgoetadCnaBN9FRaLLRQEW17KKIed1V21dJLbU/FRqiixx219NDaVi+NmnWNZT+cze7Ozsf7yoxEYpnMRJI5DQzP+5v3P8/7DEHANVHM7iXAVyAkwQCNgZYjDp3KH7jzZ1DdwmckBLirrE29KQgcTNOBZTrQdYP2es631LSPnp34zQqDlgTIcvTlOowxNBsG6o3uHw6he899eOt+EBIGeBHxUW5ElDjEYwKSKdFbzzAsVB61/q4lWlsvv3/XXAwJBOaL9pe29slE3MgoOSHF+N0DAwnwfASNehe1WudkYVw7sixgYfFkMXtSikU/VZQU3LhmHjVZ17Sz59Tbt/2QJe3glUIGMnEhe3PgjcR2Ny5dN/Df0873ebX8gS/wshUBUMK+PKveuhzWGZPF0fdiceHq4FAK3a6FyoyuFca13GKA14ruw8qM/ldhXNscBnz03duDUSY83jCchu04ePBvs5ZXtTW+wGQpW12/IZ1xP9r0dAM9g2bOH9Rmg5DDpW0ZwvFVD7CpW1ctqNqQP1DM/ZJRErvdFqw+bqHdMccKqvZr4AEsbdsVj4lTbkTttolqtXWloGp7FtlB7uv+1fIX6bSM9pyJJ9W5a3m1PAYC5ou4H7mUvT44mNwZTwio17to1Dsn8qp21Bc4cGl0WCLcP+vW9wkRQrxddNrW6cyw9NmxnTfthUX7ftgs9LcTP8dkfmxIWeW16cOHTdO22EheLU8v2qYTxezn6bT8zeo1MS/T2dk5GB3rHgNOMd6+SsFxnE3eJcAnohwdUZQkQAjqtTYadePHwri2L/CgHbuxg3/ywPhdUZJbJOnF3GnpPS9fw7ABAkgij3h8flS46REYPRvVig5KoebV8oXAg3bw4ugmjkV+6u+Xt/T1SSDE/wy6sTxrdiHHBYgCH4q8ssqLjOPHZYk/kkiKEUHg4Y5qBgbLpDBNG62W5Rhde4rjsGdISUEUgxHf1zx0MfsWdTBGCHIAeQeABbAyBdPmfziTpdz+SASlMOT1Z9GCoJeCLAtwrTBk2UAYsiKAH+JN2YreXDHg/wilzJ3Oz1YUmEcYY2fce0LIx88BFi6vvp70RPYAAAAASUVORK5CYII=";

class notwaitBlocks {

  constructor() {}

  getInfo() {
    return {
      id: 'gpos',
      name: 'GPOS',
      menuIconURI: 'https://notwait.github.io/notwait-blocks/logo.svg',

      color1: '#8BC34A',
      color2: '#7CB342',
      color3: '#689F38',

      blocks: [
        {
          opcode: 'matrix',

          blockType: Scratch.BlockType.REPORTER,

          text: 'mono bitmap [matrix]',
          arguments: {
            matrix: {
              type: Scratch.ArgumentType.MATRIX
            }
          }
        },
        {
          opcode: 'if_else_reporter',

          blockType: Scratch.BlockType.REPORTER,

          text: '[t] if [bool] else [f]',
          arguments: {
            t: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'yes'
            },
            f: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'no'
            },
            bool: {
              type: Scratch.ArgumentType.BOOLEAN
            }
          }
        },
        {
          opcode: 'color',

          blockType: Scratch.BlockType.REPORTER,

          text: 'color [color]',
          arguments: {
            color: {
              type: Scratch.ArgumentType.COLOR
            }
          }
        },
        {
          opcode: 'string_to_bool',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'is [string] truthy?',
          arguments: {
            string: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'abc'
            }
          }
        }
      ]
    }
  }

  matrix({matrix}) {
    return matrix
  }
  string_to_bool({string}) {
    return string == 'false' ? false : string == '0' ? false : true
  }
  color({color}){
    return Number('0x' + color.slice(1))
  }
  if_else_reporter({t, bool, f}){
    return bool ? t : f
  }
}

Scratch.extensions.register(new notwaitBlocks());
