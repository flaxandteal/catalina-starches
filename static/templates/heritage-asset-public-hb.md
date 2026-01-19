<!--section:asset-overview-->

::IDs::
[Place Reference] {{ ha.system_reference_numbers.uuid.resourceid }}
::end::

::Names::
{{#each ha.monument_names}}
{{#if (equal monument_name_type "Primary")}}
[@monument_name] {{{ monument_name }}}
{{/if}}
{{/each}}
{{#each ha.monument_names}}
{{#if (not monument_name_type "Primary")}}
[Alternate Name] {{{ monument_name }}}
{{/if}}
{{/each}}
::end::

{{#each ha.construction_phases}}
::Item Type::
{{#if phase_classification.monument_type }}
[@monument_type] {{{ phase_classification.monument_type }}}
{{/if}}
::end::
{{/each}}

::Address::
{{#each ha.location_data.addresses }}
{{#if county.county_value }}
[Local Government Area] {{{ county.county_value }}}
{{/if}}
{{#if street.street_value }}
[@street_value] {{{ street.street_value }}}
{{/if}}
{{#if town_or_city.town_or_city_value }}
[Suburb] {{{ town_or_city.town_or_city_value }}}
{{/if}}
{{#if postcode.postcode_value }}
[@postcode_value] {{ postcode.postcode_value }}
{{/if}}
{{/each}}
::end::

::Parcel::
{{#each ha.location_data.addresses }}
{{#if building_name.building_name_value }}
[Lot] {{{ building_name.building_name_value }}}
{{/if}}
{{/each}}
{{#each ha.location_data.area_assignments.area_assignment }}
[Plan] {{{ area_reference.area_reference_value }}}
{{/each}}
::end::

{{#each ha.descriptions}}
{{#if (equal (clean description_type) "Summary") }}
:: {{ clean description_type }} ::
{{{ description }}}
::end::
{{/if}}
{{/each}}

::Criteria::
{{#each ha.designation_and_protection_assignment }}
{{#if local_heritage_list_criteria_type }}
<h3>Criteria {{ local_heritage_list_criteria_type }}</h3>
{{/if}}

{{{ designation_names.designation_name }}}

{{#if designation_names.designation_name_use_type }}
<h4>{{{ designation_names.designation_name_use_type }}}</h4>
{{/if}}
{{/each}}
::end::

{{#each ha.descriptions}}
{{#if (equal (clean description_type) "History") }}
:: {{ clean description_type }} ::
{{{ description }}}
::end::
{{/if}}
{{/each}}

{{#each ha.descriptions}}
{{#if (equal (clean description_type) "Description") }}
:: {{ clean description_type }} ::
{{{ description }}}
::end::
{{/if}}
{{/each}}

{{#each ha.descriptions}}
{{#if (equal (clean description_type) "Reference") }}
:: {{ clean description_type }} ::
{{{ description }}}
::end::
{{/if}}
{{/each}}

{{#each ha.descriptions}}
{{#if (equal (clean description_type) "Boundary Description") }}
:: {{ clean description_type }} ::
{{{ description }}}
::end::
{{/if}}
{{/each}}

{{#each ha.descriptions}}
{{#if (equal (clean description_type) "Process Statement") }}
:: {{ clean description_type }} ::
{{{ description }}}
::end::
{{/if}}
{{/each}}

<!--section:asset-location-->

::Address::
{{#each ha.location_data.addresses }}
{{#if county.county_value }}
[Local Government Area] {{{ county.county_value }}}
{{/if}}
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

<!--section:asset-related-->

{{#if ha.associated_actors.length}}
::People{profile}::
{{#each ha.associated_actors }}
[Related] {{#if associated_actor.actor }} {{{ associated_actor.actor }}} {{else}} (untilted) {{/if}}
{{/each}}
::end::
{{else}}
<h3>No related resources</h3>
{{/if}}

