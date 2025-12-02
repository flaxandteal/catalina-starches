<!--section:asset-overview-->

::Names::
[@display_name] {{{ ha.display_name }}} 
{{#each ha.monument_names }}
[@monument_name] {{{ monument_name }}}
{{/each}}
::end::

::Classification::
{{#if ha.category_type }}
[@category_type] {{{ ha.category_type }}}
{{/if}}

{{#if ha.monument_type_n1 }}
[@monument_type_n1] {{{ ha.monument_type_n1 }}}
{{/if}}

{{#if ha.characterization }}
{{#each ha.characterization }}
[@characterization] {{{ . }}}
{{/each}}
{{/if}}

{{#if ha.historical_period_type }}
{{#each ha.historical_period_type }}
[@historical_period_type] {{{ . }}}
{{/each}}
{{/if}}
::end::

::Reference Numbers::
{{#if ha.heritage_asset_references.hb_number }}
[@hb_number] {{ ha.heritage_asset_references.hb_number }}
{{/if}}

{{#if ha.heritage_asset_references.smr_number }}
[@smr_number ]{{ ha.heritage_asset_references.smr_number }}
{{/if}}

{{#if ha.heritage_asset_references.ihr_number }}
[@ihr_number]{{ ha.heritage_asset_references.ihr_number }}
{{/if}}
::end::

::Summary::
[@condition_type] {{{ defaulty ha.condition_type (defaulty ha.condition_description.condition "(none)") }}}
::end::

::Descriptions::
{{#each ha.descriptions }}
[{{{ clean description_type }}}] {{{ replace (replace description "_x000D_" "") "\n" "<br/>" }}}
{{/each}}
::end::

{{#if ha.use_phases}}

::Use Phases::
{{#each ha.use_phases }}
[@use_phase] {{ . }}
{{/each}}
::end::
{{/if}}


{{#if ha.construction_phases}}
::Construction Phases::
{{#each ha.construction_phases }}
[@monument_type] {{{ phase_classification.monument_type }}}

---

{{/each}}
::end::
{{/if}}

<!--section:asset-location-->

::Location::
{{#each ha.location_data.addresses }}
{{#if building_name.building_name_value }}
[@building_name] {{ building_name.building_name_value }}
{{/if}}
{{#if full_address }}
[@full_address] {{{ nl (replace full_address "_x000D_" "") "<br/>" }}}
{{/if}}
{{#if town_or_city.town_or_city_value }}
[@town_or_city] {{ town_or_city.town_or_city_value }}
{{/if}}
{{#if townlands.townland }}
[@townlands] {{{ townlands.townland }}}
{{/if}}
{{#if county.county_value }}
[@county] {{{ county.county_value }}} |
{{/if}}
{{#if locality.locality_value }}
[@locality] {{ locality.locality_value }} |
{{/if}}

{{/each}}
::end::

::Administrative Areas::
{{#each ha.location_data.localities_administrative_areas }}
[{{{ clean area_type }}}] {{{ clean area_names.area_name }}}
{{/each}}
[Council] {{{ defaulty ha.location_data.council "(none)" }}}
[@current_base_map_name] {{ defaulty ha.location_data.geometry.current_base_map.current_base_map_names.current_base_map_name "(none)"}}
[@spatial_metadata_notes] {{ defaulty ha.location_data.geometry.spatial_metadata_descriptions.spatial_metadata_notes "(none)"}}
[@irish_grid_reference_tm65_] {{ defaulty ha.location_data.national_grid_references.irish_grid_reference_tm65_ "(none)"}}
::end::

::Dates::
{{#each ha.construction_phases }}
{{#if construction_phase_timespan.construction_phase_display_date }}
[@construction_phase_display_date] {{ construction_phase_timespan.construction_phase_display_date }}
{{/if}}
{{/each}}
{{#if ha.sign_off.input_date.input_date_value }}
[@input_date] {{{ ha.sign_off.input_date.input_date_value }}}
{{/if}}
::end::

{{#if ha.associated_actors.length }}
::People & Organisations::
{{#each ha.associated_actors }}
[{{{ associated_actor.role_type }}}] {{{ associated_actor.actor }}}
{{/each}}
::end::
{{/if}}

{{#if ha.designation_and_protection_assignment.length }}
{{#each ha.designation_and_protection_assignment }}
::Designation - {{{ clean designation_or_protection_type "N/A" }}}::
{{#each designation_and_protection_timespan.recommended_designation_type }}
[@recommended_designation_type] {{{ . }}}
{{/each}}
{{#if designation_names.designation_name }}
[@designation_name] {{ designation_names.designation_name }}
{{/if}}
{{#if grade }}
[@grade] {{{ default grade "N/A" }}}
{{/if}}
{{#if scheduling_criteria }}
[@scheduling_criteria] {{{ join scheduling_criteria ", " }}}
{{/if}}
{{#if designation_and_protection_timespan.designation_start_date }}
[@designation_start_date] {{{ designation_and_protection_timespan.designation_start_date }}}
{{/if}}
{{#if designation_and_protection_timespan.designation_amendment_date }}
[@designation_amendment_date] {{{ designation_and_protection_timespan.designation_amendment_date }}}
{{/if}}
{{#if designation_and_protection_timespan.designation_end_date }}
[@designation_end_date] {{{ designation_and_protection_timespan.designation_end_date }}}
{{/if}}
{{#if extent_of_designation_or_protection }}
{{#each extent_of_designation_or_protection }}
{{#if description_of_extent }}
[@description_of_extent] {{{ nl description_of_extent "<br/>" }}}
{{/if}}
{{#if geospatial_extent }}
[@geospatial_extent] (see map)
{{/if}}
{{/each}}
{{/if}}
::end::
{{/each}}
{{else}}
::(No designation)::
[Note] Some physical assets have overlapping entries across multiple records, which could carry designations.
::end::
{{/if}}

{{#if images }}
::Images::
{{#each images }}
[Image {{ plus @index 1 }}] {{ image.external_cross_reference }} {{dialogLink id=(concat "image_" index) linkText="Show"}}
{{/each}}
::end::
{{/if}}

{{#if files }}
::Files::
{{#each files }}
[File {{ plus @index 1 }}] {{ external_cross_reference }} - [{{ defaulty external_cross_reference_notes.external_cross_reference_description "Download"}}]({{ nospace (clean url) }})
{{/each}}
::end::
{{/if}}

<!--section:asset-related-->

::Places{location}::
[Related] {{ ha.associated_actors }}
::end::

::People{profile}::
[Related] {{ ha.associated_actors }}
::end::

::Organisation{building}::
[Related] {{ ha.associated_actors }}
::end::

{{#if ecrs }}
::Cross References::
{{#each ecrs }}
[#{{ plus @index 1 }}] {{{ external_cross_reference_source }}} - {{ external_cross_reference }}
{{/each}}
::end::
{{/if}}
