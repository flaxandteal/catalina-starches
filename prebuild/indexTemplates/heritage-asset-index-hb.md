{{ ha.system_reference_numbers.uuid.resourceid }}

{{#each ha.location_data.addresses }}
{{ street.street_value }} , {{ town_or_city.town_or_city_value }} , {{ postcode.postcode_value }}
{{ county.county_value }}
{{/each}}

{{ ha.record_type }}

{{ title }}

{{#each ha.monument_names }}
- {{ monument_name }}
{{/each}}

{{#each ha.location_data.area_assignments.area_assignment }}
{{#each lot_on_plan }}
{{ lot }}{{ plan }}
{{ lot }}/{{plan }}
{{ lot }} {{plan }}
{{/each}}
{{/each}}

{{#each ha.location_data.addresses }}
{{ street.street_value }} 
{{ town_or_city.town_or_city_value }}
{{ postcode.postcode_value }}
{{/each}}

{{#each ha.descriptions }}
{{#if (in (toString description_type) (array "Notes" "Summary")) }}
{{{ replace description "_x000D_" "" }}}
{{/if}}
{{/each}}

$$$

#### Heritage Item

{{#if ha.system_reference_numbers.legacyid.legacy_id }}
{{ ha.system_reference_numbers.legacyid.legacy_id }}
{{/if}}
{{#if ha.system_reference_numbers.uuid.resourceid }}
| {{ ha.system_reference_numbers.uuid.resourceid }}
{{/if}}
{{#if ha.system_reference_numbers.primaryreferencenumber.primary_reference_number }}
| {{ ha.system_reference_numbers.primaryreferencenumber.primary_reference_number }}
{{/if}}
