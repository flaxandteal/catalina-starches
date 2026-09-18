<!--section:asset-overview-->

::IDs::
[Place Reference] {{ ha.system_reference_numbers.uuid.resourceid }}
{{#if ha.heritage_asset_references.hb_number }}
[HB No.] {{ ha.heritage_asset_references.hb_number }}
{{/if}}
{{#if ha.heritage_asset_references.smr_number }}
[SMR No.] {{ ha.heritage_asset_references.smr_number }}
{{/if}}
{{#if ha.heritage_asset_references.ihr_number }}
[IHR No.] {{ ha.heritage_asset_references.ihr_number }}
{{/if}}
::end::

::Names::
{{#if (includes ha.monument_names "monument_name_use_type" "Primary")}}
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
{{#each ha.monument_names}}
{{#if @first}}
[Place Name] {{{ monument_name }}}
{{else}}
[Alternative Name] {{{ monument_name }}}
{{/if}}
{{/each}}
{{/if}}
::end::

::Classification::
{{#if ha.category_type }}
[Category] {{{ ha.category_type }}}
{{/if}}
{{#if ha.monument_type_n1 }}
[Monument Type] {{{ ha.monument_type_n1 }}}
{{/if}}
{{#each ha.characterization }}
[Characterization] {{{ . }}}
{{/each}}
::end::

::Item Type::
{{#each ha.construction_phases}}
{{#if phase_classification.monument_type }}
{{#each phase_classification.monument_type}}
[Place Type] {{{ . }}}
{{/each}}
{{/if}}
{{/each}}
::end::

::Condition::
{{#if ha.condition_type }}
[Condition Type] {{{ ha.condition_type }}}
{{/if}}
{{#if ha.condition_description.condition }}
[Condition] {{{ ha.condition_description.condition }}}
{{/if}}
::end::

::Address::
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
{{#if townlands.townland }}
[Townland] {{{ townlands.townland }}}
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

{{#each ha.location_data.geometry}}
{{#if (or (equal (clean feature_shape) "Centroid") (equal (clean feature_shape) "Feature")) }}
{{#if geospatial_coordinates }}
::Geometry::
[Coordinates] {{ pointToCoords geospatial_coordinates }}
::end::
{{/if}}
{{/if}}
{{/each}}

::Administrative Areas::
{{#each ha.location_data.localities_administrative_areas }}
[{{{ clean area_type }}}] {{{ area_names.area_name }}}
{{/each}}
{{#if ha.location_data.council }}
[Council] {{{ ha.location_data.council }}}
{{/if}}
::end::

::Area Assignments::
{{#each ha.location_data.area_assignments.area_assignment }}
[Area Reference] {{{ area_reference.area_reference_value }}}
{{/each}}
::end::

::Location Descriptions::
{{#each ha.location_data.location_descriptions }}
{{{ location_description }}}
{{/each}}
::end::

::Spatial Metadata::
{{#if ha.location_data.geometry.0.current_base_map.current_base_map_names.current_base_map_name }}
[OS Map No.] {{ ha.location_data.geometry.0.current_base_map.current_base_map_names.current_base_map_name }}
{{/if}}
{{#if ha.location_data.geometry.0.spatial_metadata_descriptions.spatial_metadata_notes }}
[Geometric Properties] {{ ha.location_data.geometry.0.spatial_metadata_descriptions.spatial_metadata_notes }}
{{/if}}
{{#if ha.location_data.national_grid_references.irish_grid_reference_tm65_ }}
[Grid Reference] {{ ha.location_data.national_grid_references.irish_grid_reference_tm65_ }}
{{/if}}
::end::

<!--section:asset-further-information-->

::Type::
{{#each ha.construction_phases }}
{{#if phase_classification.monument_type }}
{{#each phase_classification.monument_type }}
[Type] {{{ . }}}
{{/each}}
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

{{#if (any ha.construction_phases "style") }}
::Style::
{{#each ha.construction_phases }}
{{#if style }}
[Style] {{{ style }}}
{{/if}}
{{/each}}
::end::
{{/if}}

::Use Phases::
{{#each ha.use_phases }}
[Use Phase] {{ . }}
{{/each}}
::end::

::Dates::
{{#each ha.construction_phases }}
{{#if construction_phase_timespan.construction_phase_display_date }}
[Date] {{ construction_phase_timespan.construction_phase_display_date }}
{{/if}}
{{/each}}
{{#if ha.sign_off.input_date.input_date_value }}
[Record Established] {{{ ha.sign_off.input_date.input_date_value }}}
{{/if}}
::end::

::Designation::
{{#each ha.designation_and_protection_assignment }}
[Name] {{ designation_names.designation_name }}
[Grade] {{{ default grade "N/A" }}}
[Type] {{{ default designation_or_protection_type "N/A" }}}
[Criteria for Listing] {{{ join scheduling_criteria ", " }}}
{{#if local_heritage_list_criteria_type }}
[Criteria] {{ local_heritage_list_criteria_type }}
{{/if}}
{{#if designation_and_protection_timespan.designation_start_date }}
[Start Date] {{{ designation_and_protection_timespan.designation_start_date }}}
{{/if}}
{{#if designation_and_protection_timespan.designation_amendment_date }}
[Amendment Date] {{{ designation_and_protection_timespan.designation_amendment_date }}}
{{/if}}
{{#if designation_and_protection_timespan.designation_end_date }}
[End Date] {{{ designation_and_protection_timespan.designation_end_date }}}
{{/if}}
{{#if extent_of_designation_or_protection.description_of_extent }}
[Extent] {{ extent_of_designation_or_protection.description_of_extent }}
{{/if}}
{{/each}}
::end::

{{#if ha.associated_actors.length}}
::People::
{{#each ha.associated_actors }}
[{{#if associated_actor.role_type }} {{{ associated_actor.role_type }}} {{else}} Related Person {{/if}}] {{#if associated_actor.actor }} {{{ associated_actor.actor }}} {{else}} (untitled) {{/if}}
{{/each}}
::end::
{{/if}}

{{#if ecrs}}
::External Cross References::
{{#each ecrs }}
[{{{ clean external_cross_reference_source }}}] {{ external_cross_reference }} — {{ external_cross_reference_notes.external_cross_reference_description_type }}: {{ external_cross_reference_notes.external_cross_reference_description }}
{{/each}}
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
[File {{ plus @index 1 }}] <a href="{{ nospace url }}">{{ defaulty external_cross_reference_notes.external_cross_reference_description "Download" }}</a> — {{ external_cross_reference }}
{{/each}}
::end::
{{/if}}
