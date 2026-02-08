<!--section:asset-overview-->

::IDs::
[Place Reference] {{ ha.system_reference_numbers.uuid.resourceid }}
::end::

::Names::
{{#if (includes ha.monument_names "monument_name_use_type" "Primary")}}
{{! Primary name exists - use it }}
{{#each ha.monument_names}}
{{#if (equal monument_name_use_type "Primary")}}
[Place Name] {{{ monument_name }}}
{{/if}}
{{/each}}
{{#each ha.monument_names}}
{{#if (not monument_name_use_type "Primary")}}
[Alternative Name] {{{ monument_name }}}
{{/if}}
{{/each}}
{{else}}
{{! No primary found - use first as primary, rest as alternates }}
{{#each ha.monument_names}}
{{#if @first}}
[Place Name] {{{ monument_name }}}
{{else}}
[Alternative Name] {{{ monument_name }}}
{{/if}}
{{/each}}
{{/if}}
::end::

::Item Type::
{{#each ha.construction_phases}}
{{#if phase_classification.monument_type }}
[Place Type] {{{ phase_classification.monument_type }}}
{{/if}}
{{/each}}
::end::

::Address::
{{#each ha.location_data.addresses }}
{{#if county.county_value }}
[Local Government Area] {{{ county.county_value }}}
{{/if}}
{{#if street.street_value }}
[Street Address] {{{ street.street_value }}}
{{/if}}
{{#if town_or_city.town_or_city_value }}
[Suburb] {{{ town_or_city.town_or_city_value }}}
{{/if}}
{{#if postcode.postcode_value }}
[Postcode] {{ postcode.postcode_value }}
{{/if}}
{{/each}}
::end::

::Real Property Description (Lot on Plan)::
{{#each ha.location_data.area_assignments.area_assignment }}
{{#each lot_on_plan }}
[Lot on Plan] {{ lot }}/{{ plan }}
{{/each}}
{{/each}}
::end::

{{#each ha.descriptions}}
{{#if (equal (clean description_type) "Summary") }}
:: {{ clean description_type }} ::
{{{ description }}}
::end::
{{/if}}
{{/each}}

::Statement of Cultural Heritage Significance (Criteria)::
{{#each ha.designation_and_protection_assignment }}
{{#if local_heritage_list_criteria_type }}
<h3>Criterion {{ local_heritage_list_criteria_type }}</h3>
{{/if}}

{{{ designation_names.designation_name }}}

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
:: References ::
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
[Street Address] {{ street.street_value }}
{{/if}}
{{#if town_or_city.town_or_city_value }}
[Suburb] {{ town_or_city.town_or_city_value }}
{{/if}}
{{#if postcode.postcode_value }}
[Postcode] {{ postcode.postcode_value }}
{{/if}}
{{/each}}
::end::

<!--section:asset-further-information-->

::Type::
{{#each ha.construction_phases }}
{{#if phase_classification.monument_type }}
[Type] {{ phase_classification.monument_type }}
{{/if}}
{{/each}}
::end::

::Themes::
{{#each ha.use_phase }}
{{#each use_phase_classification.functional_type }}
[Theme] {{ . }}
{{/each}}
{{/each}}
::end::

{{#if ha.construction_phases.length }}
:: Construction Period ::
{{#each ha.construction_phases}}
{{#if construction_phase_timespan }}
{{#if construction_phase_timespan.construction_phase_start_date }}
{{{ construction_phase_timespan.construction_phase_start_date }}} - {{{ construction_phase_timespan.construction_phase_end_date }}}
{{else}}
{{#if construction_phase_timespan.construction_phase_end_date }}
{{{ construction_phase_timespan.construction_phase_start_date }}} - {{{ construction_phase_timespan.construction_phase_end_date }}}
{{/if}}
{{/if}}
{{/if}}
{{ phase_classification.phase_classification_description.phase_description }}<br/>

{{/each}}
::end::
{{/if}}

::Historical Period::
{{#each ha.construction_phases }}
{{#if construction_phase_type }}
[Historical Period] {{{ construction_phase_type }}}
{{/if}}
{{/each}}
::end::

::Style::
{{#each ha.construction_phases }}
{{#if cultural_period }}
[Cultural Period] {{{ cultural_period }}}
{{/if}}
{{/each}}
::end::

{{#if ha.associated_actors.length}}
::People::
{{#each ha.associated_actors }}
[{{#if associated_actor.role_type }} {{{ associated_actor.role_type }}} {{else}} Related Person {{/if}}] {{#if associated_actor.actor }} {{{ associated_actor.actor }}} {{else}} (untitled) {{/if}}
{{/each}}
::end::
{{else}}
<h3>No related resources</h3>
{{/if}}

