{{#if ha.monument_names }}
{{#each ha.monument_names }}
{{ monument_name }}
{{/each}}
{{/if }}

{{#if ha.display_name }}
{{ ha.display_name }}
{{/if }}

{{ ha.system_reference_numbers.uuid.resourceid }}

{{#each ha.location_data.addresses }}
{{{ replace full_address "_x000D_" "" }}}
{{/each}}

{{#each ha.descriptions }}
{{#if (in (toString description_type) (array "Notes" "Summary")) }}
{{{ replace description "_x000D_" "" }}}
{{/if}}
{{/each}}

$$$

|                     |                                                                                                                                                                |
| ---------------     | -------------------------------------------------                                                                                                              |
| **ID:**             | {{ ha.system_reference_numbers.uuid.resourceid }}                                                                                                              |
{{#each ha.location_data.addresses }}
{{#if county.county_value }}
| **LGD:** | {{ county.county_value }} |
{{/if}}
{{/each}}
{{#each ha.designation_and_protection_assignments }}
{{#if designation_names.designation_name_use_type._ }}
| **Classification:** | {{ designation_names.designation_name_use_type._ }} |
{{/if}}
{{/each}}
{{#each ha.location_data.addresses }}
{{#if street.street_value }}
| **Location:**       | {{ street.street_value }}, {{#if town_or_city.town_or_city_value }}{{ town_or_city.town_or_city_value }}{{/if}} |
{{/if}}
{{/each}}
