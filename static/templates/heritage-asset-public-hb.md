<!--section:asset-overview-->

::IDs::
[Tech object ID] {{ ha.system_reference_numbers.uuid.resourceid }}
{{#if ha.system_reference_numbers.legacyid.legacy_id }}
[Legacy ID] {{ ha.system_reference_numbers.legacyid.legacy_id }}
{{/if}}
{{#if ha.system_reference_numbers.primaryreferencenumber.primary_reference_number }}
[FLOC ID] {{ ha.system_reference_numbers.primaryreferencenumber.primary_reference_number }}
{{/if}}
::end::

::Names::
{{#if (includes ha.monument_names "monument_name_use_type" "Primary")}}
{{#each ha.monument_names}}
{{#if (equal monument_name_use_type "Primary")}}
[Heritage Place Name] {{{ monument_name }}}
{{/if}}
{{/each}}
{{#each ha.monument_names}}
{{#if (not monument_name_use_type "Primary")}}
[Alternative Name] {{{ monument_name }}}
{{/if}}
{{/each}}
{{else}}
{{#each ha.monument_names}}
{{#if @first}}
[Place Name] {{{ monument_name }}}
{{else}}
[Alternative Name] {{{ monument_name }}}
{{/if}}
{{/each}}
{{/if}}
::end::

::Monument type + Component::
{{#each ha.construction_phases}}
{{#if phase_classification.monument_type }}
{{#each phase_classification.monument_type}}
[Place Type] {{{ . }}}
{{/each}}
{{/if}}
{{/each}}
::end::

::Area name (Region + District)::
{{#each ha.location_data.addresses }}
{{#if building_name.building_name_value }}
[Building Name] {{ building_name.building_name_value }}
{{/if}}
{{#if full_address }}
[Full Address] {{{ replace (replace full_address "_x000D_" "") "\n" "<br/>" }}}
{{/if}}
{{#if street.street_value }}
[Street Address] {{{ street.street_value }}}
{{/if}}
{{#if town_or_city.town_or_city_value }}
[Town/City] {{{ town_or_city.town_or_city_value }}}
{{/if}}
{{#if county.county_value }}
[County] {{{ county.county_value }}}
{{/if}}
{{#if locality.locality_value }}
[Ward] {{ locality.locality_value }}
{{/if}}
{{#if postcode.postcode_value }}
[Postcode] {{ postcode.postcode_value }}
{{/if}}
{{/each}}
::end::

::External Cross References::
{{#each ha.external_cross_references }}
{{#if external_cross_reference }}
[Reference] {{ external_cross_reference }}
{{/if}}
{{#if external_cross_reference_notes.external_cross_reference_description }}
{{{ external_cross_reference_notes.external_cross_reference_description }}}
{{/if}}
{{/each}}
::end::

{{#each ha.descriptions}}
{{#if (equal (clean description_type) "Summary") }}
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

<!--section:asset-location-->

{{#each ha.location_data.geometry}}
{{#if (or (equal (clean feature_shape) "Centroid") (equal (clean feature_shape) "Feature")) }}
{{#if geospatial_coordinates }}
::Geometry::
[Coordinates] {{ pointToCoords geospatial_coordinates }}
::end::
{{/if}}
{{/if}}
{{/each}}

<!--section:asset-further-information-->

{{#if (any ha.construction_phases "construction_phase_timespan") }}
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

{{#if (any ha.construction_phases "cultural_period") }}
::Historical Period::
{{#each ha.construction_phases }}
{{#if cultural_period }}
[Historical Period] {{{ cultural_period }}}
{{/if}}
{{/each}}
::end::
{{/if}}

::Designation::
{{#each ha.designation_and_protection_assignment }}
{{#if designation_names.designation_name }}
[Name] {{ designation_names.designation_name }}
{{/if}}
[Grade] {{{ default grade "N/A" }}}
[Type] {{{ default designation_or_protection_type "N/A" }}}
{{#if risk_status }}
[Risk Status] {{{ risk_status }}}
{{/if}}
{{#if designation_and_protection_timespan.designation_start_date }}
[Start Date] {{{ designation_and_protection_timespan.designation_start_date }}}
{{/if}}
{{#if designation_and_protection_timespan.designation_end_date }}
[End Date] {{{ designation_and_protection_timespan.designation_end_date }}}
{{/if}}
{{/each}}
::end::
