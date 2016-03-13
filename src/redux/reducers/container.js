const initialState = {
  containerList: [{
    'Id': 'd37ce5f4875c1821ab101445eea47d797e9b36d8cdcdc17991be75c855a0f105',
    'Names': ['/gloomy_murdock'],
    'Image': 'dockerui/dockerui',
    'ImageID': 'sha256:903724e089de3e67467dffc6060eb5a1595e110c9626f732cf0f9b3a02eeb707',
    'Command': '/dockerui',
    'Created': 1457835879,
    'Ports': [{'IP': '0.0.0.0', 'PrivatePort': 9000, 'PublicPort': 80, 'Type': 'tcp'}],
    'Labels': {},
    'Status': 'Up 4 hours',
    'HostConfig': {'NetworkMode': 'default'},
    'NetworkSettings': {
      'Networks': {
        'bridge': {
          'IPAMConfig': null,
          'Links': null,
          'Aliases': null,
          'NetworkID': '',
          'EndpointID': '61d6aadd4d682e99ab7df741ba5e0a359c382938dd23ff336fe4bb3af3d72dc0',
          'Gateway': '172.17.0.1',
          'IPAddress': '172.17.0.3',
          'IPPrefixLen': 16,
          'IPv6Gateway': '',
          'GlobalIPv6Address': '',
          'GlobalIPv6PrefixLen': 0,
          'MacAddress': '02:42:ac:11:00:03'
        }
      }
    }
  }, {
    'Id': 'ac86a984c155a35dddde6fee6c29b4114575fd90f601f915ae15b9e6f2bbcabb',
    'Names': ['/ai-dev-node2'],
    'Image': 'tomcat-ssh',
    'ImageID': 'sha256:d3649e799b6c57da5c92eeda334128f0e4819fb7215c10cd0efd47b24c8a504e',
    'Command': '/root/run.sh',
    'Created': 1457685201,
    'Ports': [{'PrivatePort': 8778, 'Type': 'tcp'}, {
      'IP': '0.0.0.0',
      'PrivatePort': 8080,
      'PublicPort': 8085,
      'Type': 'tcp'
    }, {'PrivatePort': 22, 'Type': 'tcp'}],
    'Labels': {},
    'Status': 'Up 5 hours',
    'HostConfig': {'NetworkMode': 'default'},
    'NetworkSettings': {
      'Networks': {
        'bridge': {
          'IPAMConfig': null,
          'Links': null,
          'Aliases': null,
          'NetworkID': '',
          'EndpointID': 'e7836d320e4871d3e36b2c4855fa653d3781c6e5af14aece7270230108ac549d',
          'Gateway': '172.17.0.1',
          'IPAddress': '172.17.0.7',
          'IPPrefixLen': 16,
          'IPv6Gateway': '',
          'GlobalIPv6Address': '',
          'GlobalIPv6PrefixLen': 0,
          'MacAddress': '02:42:ac:11:00:07'
        }
      }
    }
  }, {
    'Id': 'd5e26fb10062064583ba5e0008fab83e91dd4509b113ec4e636002a45720fc6b',
    'Names': ['/ai-route-dev'],
    'Image': 'tomcat-ssh',
    'ImageID': 'sha256:d3649e799b6c57da5c92eeda334128f0e4819fb7215c10cd0efd47b24c8a504e',
    'Command': '/root/run.sh',
    'Created': 1457684808,
    'Ports': [{'IP': '0.0.0.0', 'PrivatePort': 8080, 'PublicPort': 8084, 'Type': 'tcp'}, {
      'PrivatePort': 22,
      'Type': 'tcp'
    }, {'PrivatePort': 8778, 'Type': 'tcp'}],
    'Labels': {},
    'Status': 'Up 5 hours',
    'HostConfig': {'NetworkMode': 'default'},
    'NetworkSettings': {
      'Networks': {
        'bridge': {
          'IPAMConfig': null,
          'Links': null,
          'Aliases': null,
          'NetworkID': '',
          'EndpointID': '991b8614a4b5d45bbf7d01c7c59765454e9ad5b0b07dd56125b7882b7416a658',
          'Gateway': '172.17.0.1',
          'IPAddress': '172.17.0.5',
          'IPPrefixLen': 16,
          'IPv6Gateway': '',
          'GlobalIPv6Address': '',
          'GlobalIPv6PrefixLen': 0,
          'MacAddress': '02:42:ac:11:00:05'
        }
      }
    }
  }, {
    'Id': '5653f1fe816fcc5970868d14b317ec0dd809c4eabe54b07f1adc05e918457d21',
    'Names': ['/jfwcoms-dev'],
    'Image': 'sha256:863146c5a0be2a35244b80328348a293d7820091991eeb64a32ce27cebc8a7cf',
    'ImageID': 'sha256:863146c5a0be2a35244b80328348a293d7820091991eeb64a32ce27cebc8a7cf',
    'Command': '/root/run.sh',
    'Created': 1457422789,
    'Ports': [{'IP': '0.0.0.0', 'PrivatePort': 8080, 'PublicPort': 8083, 'Type': 'tcp'}, {
      'IP': '0.0.0.0',
      'PrivatePort': 22,
      'PublicPort': 18083,
      'Type': 'tcp'
    }, {'PrivatePort': 8778, 'Type': 'tcp'}],
    'Labels': {},
    'Status': 'Up 5 hours',
    'HostConfig': {'NetworkMode': 'default'},
    'NetworkSettings': {
      'Networks': {
        'bridge': {
          'IPAMConfig': null,
          'Links': null,
          'Aliases': null,
          'NetworkID': '',
          'EndpointID': 'aa89f52b9528aeba230770c65cc122befe47f69f2d0ef5c883ab9f9f28dfdf58',
          'Gateway': '172.17.0.1',
          'IPAddress': '172.17.0.9',
          'IPPrefixLen': 16,
          'IPv6Gateway': '',
          'GlobalIPv6Address': '',
          'GlobalIPv6PrefixLen': 0,
          'MacAddress': '02:42:ac:11:00:09'
        }
      }
    }
  }, {
    'Id': '70491b3c114e726d6e9df0d629e2453821b12c662c9a1e6b80a9d08e8881777b',
    'Names': ['/ppqm-dev'],
    'Image': 'sha256:863146c5a0be2a35244b80328348a293d7820091991eeb64a32ce27cebc8a7cf',
    'ImageID': 'sha256:863146c5a0be2a35244b80328348a293d7820091991eeb64a32ce27cebc8a7cf',
    'Command': '/root/run.sh',
    'Created': 1457332420,
    'Ports': [{'PrivatePort': 8778, 'Type': 'tcp'}, {
      'IP': '0.0.0.0',
      'PrivatePort': 8080,
      'PublicPort': 8001,
      'Type': 'tcp'
    }],
    'Labels': {},
    'Status': 'Up 5 hours',
    'HostConfig': {'NetworkMode': 'default'},
    'NetworkSettings': {
      'Networks': {
        'bridge': {
          'IPAMConfig': null,
          'Links': null,
          'Aliases': null,
          'NetworkID': '',
          'EndpointID': '88009165875e7d89bdca9072e9be5c63f56e0d765d946a6a2525c77519af1d29',
          'Gateway': '172.17.0.1',
          'IPAddress': '172.17.0.4',
          'IPPrefixLen': 16,
          'IPv6Gateway': '',
          'GlobalIPv6Address': '',
          'GlobalIPv6PrefixLen': 0,
          'MacAddress': '02:42:ac:11:00:04'
        }
      }
    }
  }, {
    'Id': '89ff5aa202d56624698058a13a9d3349ae96f9d3ccf36159bd37e943a16fe60b',
    'Names': ['/ai-dev'],
    'Image': 'sha256:863146c5a0be2a35244b80328348a293d7820091991eeb64a32ce27cebc8a7cf',
    'ImageID': 'sha256:863146c5a0be2a35244b80328348a293d7820091991eeb64a32ce27cebc8a7cf',
    'Command': '/root/run.sh',
    'Created': 1457320338,
    'Ports': [{'PrivatePort': 8778, 'Type': 'tcp'}, {
      'IP': '0.0.0.0',
      'PrivatePort': 8080,
      'PublicPort': 8082,
      'Type': 'tcp'
    }],
    'Labels': {},
    'Status': 'Up 5 hours',
    'HostConfig': {'NetworkMode': 'default'},
    'NetworkSettings': {
      'Networks': {
        'bridge': {
          'IPAMConfig': null,
          'Links': null,
          'Aliases': null,
          'NetworkID': '',
          'EndpointID': 'd91f61b1a7e9b6529fea33716a2326937901abd5eb40a99efdf7ba5f19903663',
          'Gateway': '172.17.0.1',
          'IPAddress': '172.17.0.2',
          'IPPrefixLen': 16,
          'IPv6Gateway': '',
          'GlobalIPv6Address': '',
          'GlobalIPv6PrefixLen': 0,
          'MacAddress': '02:42:ac:11:00:02'
        }
      }
    }
  }, {
    'Id': 'c781f123a15a7037493583f585d36d5f07a6159b885ba47e4dfc1c79f193cd72',
    'Names': ['/ai-test'],
    'Image': 'sha256:863146c5a0be2a35244b80328348a293d7820091991eeb64a32ce27cebc8a7cf',
    'ImageID': 'sha256:863146c5a0be2a35244b80328348a293d7820091991eeb64a32ce27cebc8a7cf',
    'Command': '/root/run.sh',
    'Created': 1457061121,
    'Ports': [{'PrivatePort': 8778, 'Type': 'tcp'}, {
      'IP': '0.0.0.0',
      'PrivatePort': 8080,
      'PublicPort': 9002,
      'Type': 'tcp'
    }],
    'Labels': {},
    'Status': 'Up 5 hours',
    'HostConfig': {'NetworkMode': 'default'},
    'NetworkSettings': {
      'Networks': {
        'bridge': {
          'IPAMConfig': null,
          'Links': null,
          'Aliases': null,
          'NetworkID': '',
          'EndpointID': 'e17e99a33da46849e2c4f965fac915b43d22562fbd71bf8dcc31485a6771705f',
          'Gateway': '172.17.0.1',
          'IPAddress': '172.17.0.6',
          'IPPrefixLen': 16,
          'IPv6Gateway': '',
          'GlobalIPv6Address': '',
          'GlobalIPv6PrefixLen': 0,
          'MacAddress': '02:42:ac:11:00:06'
        }
      }
    }
  }, {
    'Id': '1182689e644ec3695474e23fa81b4533da74cca2b3fa1902d91c2c5132ac0b61',
    'Names': ['/aiconsole-test'],
    'Image': 'sha256:863146c5a0be2a35244b80328348a293d7820091991eeb64a32ce27cebc8a7cf',
    'ImageID': 'sha256:863146c5a0be2a35244b80328348a293d7820091991eeb64a32ce27cebc8a7cf',
    'Command': '/root/run.sh',
    'Created': 1457060251,
    'Ports': [{'PrivatePort': 8778, 'Type': 'tcp'}, {
      'IP': '0.0.0.0',
      'PrivatePort': 8080,
      'PublicPort': 9001,
      'Type': 'tcp'
    }],
    'Labels': {},
    'Status': 'Up 5 hours',
    'HostConfig': {'NetworkMode': 'default'},
    'NetworkSettings': {
      'Networks': {
        'bridge': {
          'IPAMConfig': null,
          'Links': null,
          'Aliases': null,
          'NetworkID': '',
          'EndpointID': 'b6bca284b6cb885043eea66c3ac89323034956a3329ca2eaff7d783246516c3d',
          'Gateway': '172.17.0.1',
          'IPAddress': '172.17.0.8',
          'IPPrefixLen': 16,
          'IPv6Gateway': '',
          'GlobalIPv6Address': '',
          'GlobalIPv6PrefixLen': 0,
          'MacAddress': '02:42:ac:11:00:08'
        }
      }
    }
  }, {
    'Id': '41ff5ec728002f4480bee7c822a3263831eb2cc3ce7f884f301497b483ab1379',
    'Names': ['/aiconsole-dev'],
    'Image': 'sha256:863146c5a0be2a35244b80328348a293d7820091991eeb64a32ce27cebc8a7cf',
    'ImageID': 'sha256:863146c5a0be2a35244b80328348a293d7820091991eeb64a32ce27cebc8a7cf',
    'Command': '/root/run.sh',
    'Created': 1457059375,
    'Ports': [{'PrivatePort': 8778, 'Type': 'tcp'}, {
      'IP': '0.0.0.0',
      'PrivatePort': 8080,
      'PublicPort': 8081,
      'Type': 'tcp'
    }],
    'Labels': {},
    'Status': 'Up 5 hours',
    'HostConfig': {'NetworkMode': 'default'},
    'NetworkSettings': {
      'Networks': {
        'bridge': {
          'IPAMConfig': null,
          'Links': null,
          'Aliases': null,
          'NetworkID': '',
          'EndpointID': '893599f8f50a25f4a13338534cd1c72c8b58927fbb0612864cd9a84dd9c2fdd3',
          'Gateway': '172.17.0.1',
          'IPAddress': '172.17.0.10',
          'IPPrefixLen': 16,
          'IPv6Gateway': '',
          'GlobalIPv6Address': '',
          'GlobalIPv6PrefixLen': 0,
          'MacAddress': '02:42:ac:11:00:0a'
        }
      }
    }
  }]
}

function container (state = initialState, action) {
  return state
}

export default container
