import json
import os

PREFIX = 'prebuild/business_data'

all_bd = []
for f in os.listdir(PREFIX):
  if f.startswith('t_'):
    with open(PREFIX + '/' + f) as fd:
      resources = json.load(fd)['business_data']['resources']
      all_bd += resources
      for res in resources:
        if '691be2cf-25d8-5fe5-8ba7-93fe86217beb' == res['resourceinstance']['resourceinstanceid']:
          print(f)
with open(PREFIX + '/a_all.json', 'w') as f:
    json.dump({'business_data': {'resources': all_bd}}, f, indent=2)
