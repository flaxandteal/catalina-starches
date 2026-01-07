<!--section:asset-overview-->

::IDs::
[Resource ID] {{ meta.resourceinstanceid }}
::end::

::Names::
{{#each ha.monument_names}}
{{#if @first}}
[@monument_name] {{ monument_name }}
{{else}}
[Alternate Name] {{ monument_name }}
{{/if}}
{{/each}}
::end::

{{#each ha.descriptions}}
:: {{ clean description_type }} ::
[@description] {{ description }}
::end::
{{/each}}

<!--section:asset-location-->

::Address::
[Local Government Area] This is a gov area {{{ county.county_value }}}
{{#each ha.location_data.addresses }}
{{#if street.street_value }}
[@street_value] {{ street.street_value }}
{{/if}}
{{#if town_or_city.town_or_city_value }}
[Suburb] {{ town_or_city.town_or_city_value }}
{{/if}}
{{#if postcode.postcode_value }}
[@postcode_value] {{ postcode.postcode_value }}
{{/if}}
{{/each}}
::end::

::Lot::
{{#if ha.location_data.addresses.lot.lot_value }}
[@lot_value]{{ addresses.lot.lot_value }}
{{/if}}
::end::

::Plan::
{{#if area_assignments.area_reference.area_reference_value }}
[Plan]{{ area_assignments.area_reference.area_reference_value }}
{{/if}}
::end::

<!--section:asset-related-->

::Places{location}::
[Related] Brisbane
::end::

::People{profile}::
[Related] John Smith
[Related] Jane Doe
[Related] Anna Smythe
::end::

::Organisation{building}::
[Related] Council
::end::
