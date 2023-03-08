import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SharedService} from './shared.service';
import { NgbdSortableHeader } from './sortable.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NestableModule } from 'ngx-nestable';
import { NgxSpinnerModule } from "ngx-spinner";
import { LightboxModule } from 'ngx-lightbox';

import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';



FullCalendarModule.registerPlugins([
	dayGridPlugin,
	timeGridPlugin,
	listPlugin,
	interactionPlugin
]);

import { MetismenuAngularModule } from "@metismenu/angular";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';



/* #########################  SITE PAGES COMPONENT ###################*/

import { AdminComponent } from './admin/admin.component';


import { LoadingComponent } from './elements/loading/loading.component';
import { NavHeaderComponent } from './elements/nav-header/nav-header.component';
import { NavigationComponent } from './elements/navigation/navigation.component';
import { HeaderComponent } from './elements/header/header.component';
import { FooterComponent } from './elements/footer/footer.component';

import { Index1Component } from './dashboard/index1/index1.component';
import { Graph1Component } from './elements/dashboard1/graph1/graph1.component';
import { Graph2Component } from './elements/dashboard1/graph2/graph2.component';
import { Graph3Component } from './elements/dashboard1/graph3/graph3.component';
import { Graph4Component } from './elements/dashboard1/graph4/graph4.component';
import { GraphMarketOverviewComponent } from './elements/dashboard1/graph-market-overview/graph-market-overview.component';
import { WeeklyComponent } from './elements/dashboard1/graph-market-overview/weekly/weekly.component';
import { MonthlyComponent } from './elements/dashboard1/graph-market-overview/monthly/monthly.component';
import { YearlyComponent } from './elements/dashboard1/graph-market-overview/yearly/yearly.component';
import { GraphCryptoStatisticsComponent } from './elements/dashboard1/graph-crypto-statistics/graph-crypto-statistics.component';
import { QuickTransferComponent } from './elements/dashboard1/quick-transfer/quick-transfer.component';
import { SellOrderComponent } from './elements/dashboard1/sell-order/sell-order.component';
import { BuyOrderComponent } from './elements/dashboard1/buy-order/buy-order.component';



import { Index2Component } from './dashboard/index2/index2.component';
import { Das2Graph1Component } from './elements/dashboard2/das2-graph1/das2-graph1.component';
import { Das2Graph2Component } from './elements/dashboard2/das2-graph2/das2-graph2.component';
import { Das2Graph3Component } from './elements/dashboard2/das2-graph3/das2-graph3.component';
import { GraphCoinChartComponent } from './elements/dashboard2/graph-coin-chart/graph-coin-chart.component';
import { MarketInfoComponent } from './elements/dashboard2/market-info/market-info.component';
import { DashboardCrousal1Component } from './elements/dashboard2/dashboard-crousal1/dashboard-crousal1.component';
import { Das2QuickTransferComponent } from './elements/dashboard2/das2-quick-transfer/das2-quick-transfer.component';
import { Das2SellOrderComponent } from './elements/dashboard2/das2-sell-order/das2-sell-order.component';
import { Das2BuyOrderComponent } from './elements/dashboard2/das2-buy-order/das2-buy-order.component';

import { Index3Component } from './dashboard/index3/index3.component';
import { BuySellFormComponent } from './elements/dashboard3/buy-sell-form/buy-sell-form.component';
import { Das3Graph1Component } from './elements/dashboard3/das3-graph1/das3-graph1.component';

import { Index4Component } from './dashboard/index4/index4.component';

import { CoinDetailsComponent } from './coin-details/coin-details.component';
import { AboutComponent } from './elements/coin-details/about/about.component';
import { CoinDetailQuickTransferComponent } from './elements/coin-details/coin-detail-quick-transfer/coin-detail-quick-transfer.component';

import { MyWalletsComponent } from './my-wallets/my-wallets.component';
import { CardSliderComponent } from './elements/my-wallets/card-slider/card-slider.component';
import { CardDetailsComponent } from './elements/my-wallets/card-details/card-details.component';
import { GraphMainLimitComponent } from './elements/my-wallets/card-details/graph-main-limit/graph-main-limit.component';
import { GraphSecondsComponent } from './elements/my-wallets/card-details/graph-seconds/graph-seconds.component';
import { GraphOthersComponent } from './elements/my-wallets/card-details/graph-others/graph-others.component';
import { DetailPieChartComponent } from './elements/my-wallets/card-details/detail-pie-chart/detail-pie-chart.component';
import { WalletCoinChartComponent } from './elements/my-wallets/wallet-coin-chart/wallet-coin-chart.component';
import { WalletActivityComponent } from './elements/my-wallets/wallet-activity/wallet-activity.component';

import { TransactionsComponent } from './transactions/transactions.component';

import { PortofolioComponent } from './portofolio/portofolio.component';
import { MyProfileComponent } from './elements/portofolio/my-profile/my-profile.component';
import { CoinHoldingComponent } from './elements/portofolio/coin-holding/coin-holding.component';
import { CurrentGraph1Component } from './elements/portofolio/current-graph1/current-graph1.component';
import { CurrentGraph2Component } from './elements/portofolio/current-graph2/current-graph2.component';

import { MarketCapitalComponent } from './market-capital/market-capital.component';

import { ProfileComponent } from './apps/profile/profile.component';
import { UserStatisticsComponent } from './elements/profile/user-statistics/user-statistics.component';
import { InterestComponent } from './elements/profile/interest/interest.component';
import { LatestNewsComponent } from './elements/profile/latest-news/latest-news.component';
import { HighlightsComponent } from './elements/profile/highlights/highlights.component';

import { PostDetailsComponent } from './apps/post-details/post-details.component';

import { ComposeComponent } from './apps/email/compose/compose.component';
import { InboxComponent } from './apps/email/inbox/inbox.component';
import { ReadComponent } from './apps/email/read/read.component';

import { CalenderComponent } from './apps/calender/calender.component';

import { ProductGridComponent } from './apps/shop/product-grid/product-grid.component';
import { ProductListComponent } from './apps/shop/product-list/product-list.component';
import { ProductDetailComponent } from './apps/shop/product-detail/product-detail.component';
import { OrderComponent } from './apps/shop/order/order.component';
import { CheckoutComponent } from './apps/shop/checkout/checkout.component';
import { InvoiceComponent } from './apps/shop/invoice/invoice.component';
import { EcomCustomersComponent } from './apps/shop/ecom-customers/ecom-customers.component';


import { ApexComponent } from './charts/apex/apex.component';
import { LineComponent } from './charts/apex/line/line.component';
import { BasicLineChartComponent } from './charts/apex/line/basic-line-chart/basic-line-chart.component';
import { LineChartWithDatalabelsComponent } from './charts/apex/line/line-chart-with-datalabels/line-chart-with-datalabels.component';
import { ZoomableTimeseriesComponent } from './charts/apex/line/zoomable-timeseries/zoomable-timeseries.component';
import { LineWithAnnotationsComponent } from './charts/apex/line/line-with-annotations/line-with-annotations.component';
import { SyncingChartsComponent } from './charts/apex/line/syncing-charts/syncing-charts.component';
import { BrushChartComponent } from './charts/apex/line/brush-chart/brush-chart.component';
import { SteplineChartComponent } from './charts/apex/line/stepline-chart/stepline-chart.component';
import { GradientLineChartComponent } from './charts/apex/line/gradient-line-chart/gradient-line-chart.component';
import { MissingOrNullValuesComponent } from './charts/apex/line/missing-or-null-values/missing-or-null-values.component';
import { DashedLineChartComponent } from './charts/apex/line/dashed-line-chart/dashed-line-chart.component';
import { AreaComponent } from './charts/apex/area/area.component';
import { AreaBasicComponent } from './charts/apex/area/area-basic/area-basic.component';
import { AreaNegativeComponent } from './charts/apex/area/area-negative/area-negative.component';
import { AreaGithubStyleComponent } from './charts/apex/area/area-github-style/area-github-style.component';
import { AreaSplineComponent } from './charts/apex/area/area-spline/area-spline.component';
import { AreaStackedComponent } from './charts/apex/area/area-stacked/area-stacked.component';
import { AreaIrregularTimeseriesComponent } from './charts/apex/area/area-irregular-timeseries/area-irregular-timeseries.component';
import { AreaMissingOrNullValuesComponent } from './charts/apex/area/area-missing-or-null-values/area-missing-or-null-values.component';
import { ColumnComponent } from './charts/apex/column/column.component';
import { ColumnBasicComponent } from './charts/apex/column/column-basic/column-basic.component';
import { ColumnDataLabelsComponent } from './charts/apex/column/column-data-labels/column-data-labels.component';
import { ColumnStackedComponent } from './charts/apex/column/column-stacked/column-stacked.component';
import { ColumnStacked100Component } from './charts/apex/column/column-stacked100/column-stacked100.component';
import { ColumnRotatedLabelsComponent } from './charts/apex/column/column-rotated-labels/column-rotated-labels.component';
import { ColumnNegativeValuesComponent } from './charts/apex/column/column-negative-values/column-negative-values.component';
import { ColumnLoadedChartComponent } from './charts/apex/column/column-loaded-chart/column-loaded-chart.component';
import { ColumnDistributedComponent } from './charts/apex/column/column-distributed/column-distributed.component';
import { ColumnRangeComponent } from './charts/apex/column/column-range/column-range.component';
import { BarComponent } from './charts/apex/bar/bar.component';
import { BarBasicComponent } from './charts/apex/bar/bar-basic/bar-basic.component';
import { BarGroupedComponent } from './charts/apex/bar/bar-grouped/bar-grouped.component';
import { BarStackedComponent } from './charts/apex/bar/bar-stacked/bar-stacked.component';
import { BarStacked100Component } from './charts/apex/bar/bar-stacked100/bar-stacked100.component';
import { BarNegativeValuesComponent } from './charts/apex/bar/bar-negative-values/bar-negative-values.component';
import { BarReversedComponent } from './charts/apex/bar/bar-reversed/bar-reversed.component';
import { BarCustomDataLabelsComponent } from './charts/apex/bar/bar-custom-data-labels/bar-custom-data-labels.component';
import { BarPatternedComponent } from './charts/apex/bar/bar-patterned/bar-patterned.component';
import { BarImagesComponent } from './charts/apex/bar/bar-images/bar-images.component';
import { MixedComponent } from './charts/apex/mixed/mixed.component';
import { MixedLineColumnComponent } from './charts/apex/mixed/mixed-line-column/mixed-line-column.component';
import { MixedMultipleYAxisComponent } from './charts/apex/mixed/mixed-multiple-y-axis/mixed-multiple-y-axis.component';
import { MixedLineAreaComponent } from './charts/apex/mixed/mixed-line-area/mixed-line-area.component';
import { MixedLineColumnAreaComponent } from './charts/apex/mixed/mixed-line-column-area/mixed-line-column-area.component';
import { TimelineComponent } from './charts/apex/timeline/timeline.component';
import { TimelineBasicComponent } from './charts/apex/timeline/timeline-basic/timeline-basic.component';
import { TimelineDistributedComponent } from './charts/apex/timeline/timeline-distributed/timeline-distributed.component';
import { TimelineMultiSeriesComponent } from './charts/apex/timeline/timeline-multi-series/timeline-multi-series.component';
import { TimelineAdvancedComponent } from './charts/apex/timeline/timeline-advanced/timeline-advanced.component';
import { TimelineMultipleSeriesComponent } from './charts/apex/timeline/timeline-multiple-series/timeline-multiple-series.component';
import { CandlestickComponent } from './charts/apex/candlestick/candlestick.component';
import { CandlestickBasicComponent } from './charts/apex/candlestick/candlestick-basic/candlestick-basic.component';
import { CandlestickComboComponent } from './charts/apex/candlestick/candlestick-combo/candlestick-combo.component';
import { CandlestickCategoryComponent } from './charts/apex/candlestick/candlestick-category/candlestick-category.component';
import { CandlestickLineComponent } from './charts/apex/candlestick/candlestick-line/candlestick-line.component';
import { PieComponent } from './charts/apex/pie/pie.component';
import { PieSimpleComponent } from './charts/apex/pie/pie-simple/pie-simple.component';
import { PieDonutComponent } from './charts/apex/pie/pie-donut/pie-donut.component';
import { PieMonochromeComponent } from './charts/apex/pie/pie-monochrome/pie-monochrome.component';
import { PieGradientDonutComponent } from './charts/apex/pie/pie-gradient-donut/pie-gradient-donut.component';
import { SemiDonutComponent } from './charts/apex/pie/semi-donut/semi-donut.component';
import { DonutWithPatternComponent } from './charts/apex/pie/donut-with-pattern/donut-with-pattern.component';
import { RadarComponent } from './charts/apex/radar/radar.component';
import { RadarBasicComponent } from './charts/apex/radar/radar-basic/radar-basic.component';
import { RadarMultipleSeriesComponent } from './charts/apex/radar/radar-multiple-series/radar-multiple-series.component';
import { RadialbarComponent } from './charts/apex/radialbar/radialbar.component';
import { RadialbarBasicComponent } from './charts/apex/radialbar/radialbar-basic/radialbar-basic.component';
import { RadialbarMultipleComponent } from './charts/apex/radialbar/radialbar-multiple/radialbar-multiple.component';
import { RadialbarCustomAngleCircleComponent } from './charts/apex/radialbar/radialbar-custom-angle-circle/radialbar-custom-angle-circle.component';
import { RadialbarGradientComponent } from './charts/apex/radialbar/radialbar-gradient/radialbar-gradient.component';
import { RadialbarStrokedAngularGaugeComponent } from './charts/apex/radialbar/radialbar-stroked-angular-gauge/radialbar-stroked-angular-gauge.component';
import { RadialbarSemiCircleGaugeComponent } from './charts/apex/radialbar/radialbar-semi-circle-gauge/radialbar-semi-circle-gauge.component';
import { PolarAreaComponent } from './charts/apex/polar-area/polar-area.component';
import { PolarAreaBasicComponent } from './charts/apex/polar-area/polar-area-basic/polar-area-basic.component';
import { PolarAreaMonochromeComponent } from './charts/apex/polar-area/polar-area-monochrome/polar-area-monochrome.component';
import { BubbleComponent } from './charts/apex/bubble/bubble.component';
import { BubbleSimpleComponent } from './charts/apex/bubble/bubble-simple/bubble-simple.component';
import { Bubble3DComponent } from './charts/apex/bubble/bubble3-d/bubble3-d.component';
import { ScatterComponent } from './charts/apex/scatter/scatter.component';
import { ScatterBasicComponent } from './charts/apex/scatter/scatter-basic/scatter-basic.component';
import { ScatterDatetimeComponent } from './charts/apex/scatter/scatter-datetime/scatter-datetime.component';
import { ScatterImagesComponent } from './charts/apex/scatter/scatter-images/scatter-images.component';
import { HeatmapComponent } from './charts/apex/heatmap/heatmap.component';
import { HeatmapBasicComponent } from './charts/apex/heatmap/heatmap-basic/heatmap-basic.component';
import { HeatmapMultipleColorsComponent } from './charts/apex/heatmap/heatmap-multiple-colors/heatmap-multiple-colors.component';
import { HeatmapMultipleFlippedComponent } from './charts/apex/heatmap/heatmap-multiple-flipped/heatmap-multiple-flipped.component';
import { HeatmapColorRangeComponent } from './charts/apex/heatmap/heatmap-color-range/heatmap-color-range.component';
import { HeatmapRoundedComponent } from './charts/apex/heatmap/heatmap-rounded/heatmap-rounded.component';
import { TreemapComponent } from './charts/apex/treemap/treemap.component';
import { TreemapBasicComponent } from './charts/apex/treemap/treemap-basic/treemap-basic.component';
import { TreemapMultipleSeriesComponent } from './charts/apex/treemap/treemap-multiple-series/treemap-multiple-series.component';
import { TreemapColorRangeComponent } from './charts/apex/treemap/treemap-color-range/treemap-color-range.component';
import { TreemapDistributedComponent } from './charts/apex/treemap/treemap-distributed/treemap-distributed.component';
import { SparklinesComponent } from './charts/apex/sparklines/sparklines.component';
import { SparklinesBasicComponent } from './charts/apex/sparklines/sparklines-basic/sparklines-basic.component';
import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { ChartjsLineComponent } from './charts/chartjs/chartjs-line/chartjs-line.component';
import { ChartjsBarComponent } from './charts/chartjs/chartjs-bar/chartjs-bar.component';
import { ChartjsDoughnutComponent } from './charts/chartjs/chartjs-doughnut/chartjs-doughnut.component';
import { ChartjsRadarComponent } from './charts/chartjs/chartjs-radar/chartjs-radar.component';
import { ChartjsPieComponent } from './charts/chartjs/chartjs-pie/chartjs-pie.component';
import { ChartjsBubbleComponent } from './charts/chartjs/chartjs-bubble/chartjs-bubble.component';



import { AccordionComponent } from './bootstrap/accordion/accordion.component';
import { AccordionBasicComponent } from './bootstrap/accordion/accordion-basic/accordion-basic.component';
import { AccordionStaticComponent } from './bootstrap/accordion/accordion-static/accordion-static.component';
import { AccordionToggleComponent } from './bootstrap/accordion/accordion-toggle/accordion-toggle.component';
import { AccordionHeaderComponent } from './bootstrap/accordion/accordion-header/accordion-header.component';
import { AccordionPreventchangeComponent } from './bootstrap/accordion/accordion-preventchange/accordion-preventchange.component';
import { AccordionConfigComponent } from './bootstrap/accordion/accordion-config/accordion-config.component';

import { AlertComponent } from './bootstrap/alert/alert.component';
import { AlertCloseableComponent } from './bootstrap/alert/alert-closeable/alert-closeable.component';
import { AlertBasicComponent } from './bootstrap/alert/alert-basic/alert-basic.component';
import { AlertSlefclosingComponent } from './bootstrap/alert/alert-slefclosing/alert-slefclosing.component';
import { AlertCustomComponent } from './bootstrap/alert/alert-custom/alert-custom.component';
import { AlertConfigComponent } from './bootstrap/alert/alert-config/alert-config.component';

import { ButtonComponent } from './bootstrap/button/button.component';

import { ModalComponent } from './bootstrap/modal/modal.component';
import { BasicModalComponent } from './bootstrap/modal/basic-modal/basic-modal.component';
import { ModalComponentComponent } from './bootstrap/modal/modal-component/modal-component.component';
import { ModalOptionsComponent } from './bootstrap/modal/modal-options/modal-options.component';
import { ModalFocusComponent } from './bootstrap/modal/modal-focus/modal-focus.component';
import { ModalStackedComponent } from './bootstrap/modal/modal-stacked/modal-stacked.component';
import { ModalConfigComponent } from './bootstrap/modal/modal-config/modal-config.component';

import { BadgeComponent } from './bootstrap/badge/badge.component';

import { ButtonGroupComponent } from './bootstrap/button-group/button-group.component';

import { ListGroupComponent } from './bootstrap/list-group/list-group.component';

import { CarouselComponent } from './bootstrap/carousel/carousel.component';
import { CarouselBasicComponent } from './bootstrap/carousel/carousel-basic/carousel-basic.component';
import { CarouselNavigationComponent } from './bootstrap/carousel/carousel-navigation/carousel-navigation.component';
import { CarouselPauseComponent } from './bootstrap/carousel/carousel-pause/carousel-pause.component';
import { CarouselConfigComponent } from './bootstrap/carousel/carousel-config/carousel-config.component';

import { DatepickerComponent } from './bootstrap/datepicker/datepicker.component';
import { DatepickerBasicComponent } from './bootstrap/datepicker/datepicker-basic/datepicker-basic.component';
import { DatepickerPopupComponent } from './bootstrap/datepicker/datepicker-popup/datepicker-popup.component';
import { DatepickerMultipleComponent } from './bootstrap/datepicker/datepicker-multiple/datepicker-multiple.component';
import { DatepickerRangeComponent } from './bootstrap/datepicker/datepicker-range/datepicker-range.component';
import { DatepickerRangePopupComponent } from './bootstrap/datepicker/datepicker-range-popup/datepicker-range-popup.component';
import { DatepickerDisabledComponent } from './bootstrap/datepicker/datepicker-disabled/datepicker-disabled.component';
import { DatepickerAdapterComponent } from './bootstrap/datepicker/datepicker-adapter/datepicker-adapter.component';
import { DatepickerI18nComponent } from './bootstrap/datepicker/datepicker-i18n/datepicker-i18n.component';
import { DatepickerCustomdayComponent } from './bootstrap/datepicker/datepicker-customday/datepicker-customday.component';
import { DatepickerCustommonthComponent } from './bootstrap/datepicker/datepicker-custommonth/datepicker-custommonth.component';
import { DatepickerFootertemplateComponent } from './bootstrap/datepicker/datepicker-footertemplate/datepicker-footertemplate.component';
import { DatepickerPositiontargetComponent } from './bootstrap/datepicker/datepicker-positiontarget/datepicker-positiontarget.component';
import { DatepickerKeyboardComponent } from './bootstrap/datepicker/datepicker-keyboard/datepicker-keyboard.component';
import { DatepickerConfigComponent } from './bootstrap/datepicker/datepicker-config/datepicker-config.component';

import { DropdownComponent } from './bootstrap/dropdown/dropdown.component';
import { DropdownBasicComponent } from './bootstrap/dropdown/dropdown-basic/dropdown-basic.component';
import { DropdownManualComponent } from './bootstrap/dropdown/dropdown-manual/dropdown-manual.component';
import { DropdownSplitComponent } from './bootstrap/dropdown/dropdown-split/dropdown-split.component';
import { DropdownFormComponent } from './bootstrap/dropdown/dropdown-form/dropdown-form.component';
import { DropdownContainerComponent } from './bootstrap/dropdown/dropdown-container/dropdown-container.component';
import { DropdownNavbarComponent } from './bootstrap/dropdown/dropdown-navbar/dropdown-navbar.component';
import { DropdownConfigComponent } from './bootstrap/dropdown/dropdown-config/dropdown-config.component';

import { MediaObjectComponent } from './bootstrap/media-object/media-object.component';

import { NavComponent } from './bootstrap/nav/nav.component';
import { NavMarkupComponent } from './bootstrap/nav/nav-markup/nav-markup.component';
import { NavVerticalComponent } from './bootstrap/nav/nav-vertical/nav-vertical.component';
import { NavSelectionComponent } from './bootstrap/nav/nav-selection/nav-selection.component';
import { NavKeepContentComponent } from './bootstrap/nav/nav-keep-content/nav-keep-content.component';
import { NavDynamicComponent } from './bootstrap/nav/nav-dynamic/nav-dynamic.component';
import { NavCustomStyleComponent } from './bootstrap/nav/nav-custom-style/nav-custom-style.component';
import { NavConfigComponent } from './bootstrap/nav/nav-config/nav-config.component';
import { NavBasicComponent } from './bootstrap/nav/nav-basic/nav-basic.component';

import { PaginationComponent } from './bootstrap/pagination/pagination.component';
import { PaginationBasicComponent } from './bootstrap/pagination/pagination-basic/pagination-basic.component';
import { PaginationAdvancedComponent } from './bootstrap/pagination/pagination-advanced/pagination-advanced.component';
import { PaginationCustomizationComponent } from './bootstrap/pagination/pagination-customization/pagination-customization.component';
import { PaginationSizeComponent } from './bootstrap/pagination/pagination-size/pagination-size.component';
import { PaginationJustifyComponent } from './bootstrap/pagination/pagination-justify/pagination-justify.component';
import { PaginationDisabledComponent } from './bootstrap/pagination/pagination-disabled/pagination-disabled.component';
import { PaginationConfigComponent } from './bootstrap/pagination/pagination-config/pagination-config.component';

import { PopoverComponent } from './bootstrap/popover/popover.component';
import { PopoverBasicComponent } from './bootstrap/popover/popover-basic/popover-basic.component';
import { PopoverTplcontentComponent } from './bootstrap/popover/popover-tplcontent/popover-tplcontent.component';
import { PopoverTriggersComponent } from './bootstrap/popover/popover-triggers/popover-triggers.component';
import { PopoverAutocloseComponent } from './bootstrap/popover/popover-autoclose/popover-autoclose.component';
import { PopoverTplwithcontextComponent } from './bootstrap/popover/popover-tplwithcontext/popover-tplwithcontext.component';
import { PopoverDelayComponent } from './bootstrap/popover/popover-delay/popover-delay.component';
import { PopoverVisibilityComponent } from './bootstrap/popover/popover-visibility/popover-visibility.component';
import { PopoverContainerComponent } from './bootstrap/popover/popover-container/popover-container.component';
import { PopoverCustomclassComponent } from './bootstrap/popover/popover-customclass/popover-customclass.component';
import { PopoverConfigComponent } from './bootstrap/popover/popover-config/popover-config.component';

import { ProgressbarComponent } from './bootstrap/progressbar/progressbar.component';
import { ProgressbarBasicComponent } from './bootstrap/progressbar/progressbar-basic/progressbar-basic.component';
import { ProgressbarTexttypesComponent } from './bootstrap/progressbar/progressbar-texttypes/progressbar-texttypes.component';
import { ProgressbarShowvalueComponent } from './bootstrap/progressbar/progressbar-showvalue/progressbar-showvalue.component';
import { ProgressbarStripedComponent } from './bootstrap/progressbar/progressbar-striped/progressbar-striped.component';
import { ProgressbarLabelsComponent } from './bootstrap/progressbar/progressbar-labels/progressbar-labels.component';
import { ProgressbarHeightComponent } from './bootstrap/progressbar/progressbar-height/progressbar-height.component';
import { ProgressbarConfigComponent } from './bootstrap/progressbar/progressbar-config/progressbar-config.component';

import { RatingComponent } from './bootstrap/rating/rating.component';
import { RatingBasicComponent } from './bootstrap/rating/rating-basic/rating-basic.component';
import { RatingEventsComponent } from './bootstrap/rating/rating-events/rating-events.component';
import { RatingTemplateComponent } from './bootstrap/rating/rating-template/rating-template.component';
import { RatingDecimalComponent } from './bootstrap/rating/rating-decimal/rating-decimal.component';
import { RatingFormComponent } from './bootstrap/rating/rating-form/rating-form.component';
import { RatingConfigComponent } from './bootstrap/rating/rating-config/rating-config.component';

import { TableComponent } from './bootstrap/table/table.component';
import { TableBasicComponent } from './bootstrap/table/table-basic/table-basic.component';
import { TableSortableComponent } from './bootstrap/table/table-sortable/table-sortable.component';
import { TableFilteringComponent } from './bootstrap/table/table-filtering/table-filtering.component';
import { TablePaginationComponent } from './bootstrap/table/table-pagination/table-pagination.component';
import { TableCompleteComponent } from './bootstrap/table/table-complete/table-complete.component';

import { TimepickerComponent } from './bootstrap/timepicker/timepicker.component';
import { TimepickerBasicComponent } from './bootstrap/timepicker/timepicker-basic/timepicker-basic.component';
import { TimepickerMeridianComponent } from './bootstrap/timepicker/timepicker-meridian/timepicker-meridian.component';
import { TimepickerSecondsComponent } from './bootstrap/timepicker/timepicker-seconds/timepicker-seconds.component';
import { TimepickerSpinnersComponent } from './bootstrap/timepicker/timepicker-spinners/timepicker-spinners.component';
import { TimepickerStepsComponent } from './bootstrap/timepicker/timepicker-steps/timepicker-steps.component';
import { TimepickerValidationComponent } from './bootstrap/timepicker/timepicker-validation/timepicker-validation.component';
import { TimepickerAdapterComponent } from './bootstrap/timepicker/timepicker-adapter/timepicker-adapter.component';
import { TimepickerI18nComponent } from './bootstrap/timepicker/timepicker-i18n/timepicker-i18n.component';
import { TimepickerConfigComponent } from './bootstrap/timepicker/timepicker-config/timepicker-config.component';

import { ToastComponent } from './bootstrap/toast/toast.component';
import { ToastInlineComponent } from './bootstrap/toast/toast-inline/toast-inline.component';
import { ToastCustomComponent } from './bootstrap/toast/toast-custom/toast-custom.component';
import { ToastCloseableComponent } from './bootstrap/toast/toast-closeable/toast-closeable.component';
import { ToastPreventAutohideComponent } from './bootstrap/toast/toast-prevent-autohide/toast-prevent-autohide.component';
import { ToastGlobalComponent } from './bootstrap/toast/toast-global/toast-global.component';
import { ToastsContainer } from './bootstrap/toast/toast-global/toasts-container.component';

import { TooltipComponent } from './bootstrap/tooltip/tooltip.component';
import { TooltipBasicComponent } from './bootstrap/tooltip/tooltip-basic/tooltip-basic.component';
import { TooltipTplcontentComponent } from './bootstrap/tooltip/tooltip-tplcontent/tooltip-tplcontent.component';
import { TooltipTriggersComponent } from './bootstrap/tooltip/tooltip-triggers/tooltip-triggers.component';
import { TooltipAutocloseComponent } from './bootstrap/tooltip/tooltip-autoclose/tooltip-autoclose.component';
import { TooltipTplwithcontextComponent } from './bootstrap/tooltip/tooltip-tplwithcontext/tooltip-tplwithcontext.component';
import { TooltipDelayComponent } from './bootstrap/tooltip/tooltip-delay/tooltip-delay.component';
import { TooltipContainerComponent } from './bootstrap/tooltip/tooltip-container/tooltip-container.component';
import { TooltipCustomclassComponent } from './bootstrap/tooltip/tooltip-customclass/tooltip-customclass.component';
import { TooltipConfigComponent } from './bootstrap/tooltip/tooltip-config/tooltip-config.component';

import { TypeaheadComponent } from './bootstrap/typeahead/typeahead.component';
import { TypeaheadBasicComponent } from './bootstrap/typeahead/typeahead-basic/typeahead-basic.component';
import { TypeaheadFocusComponent } from './bootstrap/typeahead/typeahead-focus/typeahead-focus.component';
import { TypeaheadFormatComponent } from './bootstrap/typeahead/typeahead-format/typeahead-format.component';
import { TypeaheadHttpComponent } from './bootstrap/typeahead/typeahead-http/typeahead-http.component';
import { TypeaheadTemplateComponent } from './bootstrap/typeahead/typeahead-template/typeahead-template.component';
import { TypeaheadPreventManualEntryComponent } from './bootstrap/typeahead/typeahead-prevent-manual-entry/typeahead-prevent-manual-entry.component';
import { TypeaheadConfigComponent } from './bootstrap/typeahead/typeahead-config/typeahead-config.component';

import { CardsComponent } from './bootstrap/cards/cards.component';
import { TypographyComponent } from './bootstrap/typography/typography.component';
import { GridComponent } from './bootstrap/grid/grid.component';

import { NestableComponent } from './plugins/nestable/nestable.component';
import { LightGalleryComponent } from './plugins/light-gallery/light-gallery.component';

import { WidgetComponent } from './widget/widget.component';
import { Timeline1Component } from './elements/widget/timeline1/timeline1.component';
import { Timeline2Component } from './elements/widget/timeline2/timeline2.component';
import { Notifications1Component } from './elements/widget/notifications1/notifications1.component';
import { Notifications2Component } from './elements/widget/notifications2/notifications2.component';
import { MessageComponent } from './elements/widget/message/message.component';
import { TodolistComponent } from './elements/widget/todolist/todolist.component';
import { PieChart1Component } from './elements/widget/charts/pie-chart1/pie-chart1.component';
import { BarChart1Component } from './elements/widget/charts/bar-chart1/bar-chart1.component';
import { BarChart2Component } from './elements/widget/charts/bar-chart2/bar-chart2.component';
import { AreaChart1Component } from './elements/widget/charts/area-chart1/area-chart1.component';
import { VisitorActivityComponent } from './elements/widget/visitor-activity/visitor-activity.component';
import { VisitorActivityDayComponent } from './elements/widget/visitor-activity/visitor-activity-day/visitor-activity-day.component';
import { VisitorActivityMonthComponent } from './elements/widget/visitor-activity/visitor-activity-month/visitor-activity-month.component';
import { VisitorActivityYearComponent } from './elements/widget/visitor-activity/visitor-activity-year/visitor-activity-year.component';
import { ChartjsActiveUsersComponent } from './elements/widget/charts/chartjs-active-users/chartjs-active-users.component';
import { BloodPressureComponent } from './elements/widget/charts/blood-pressure/blood-pressure.component';
import { HeartRateComponent } from './elements/widget/charts/heart-rate/heart-rate.component';
import { GlucoseRateComponent } from './elements/widget/charts/glucose-rate/glucose-rate.component';
import { ClolesterolComponent } from './elements/widget/charts/clolesterol/clolesterol.component';
import { BarChart3Component } from './elements/widget/charts/bar-chart3/bar-chart3.component';
import { AreaChart2Component } from './elements/widget/charts/area-chart2/area-chart2.component';
import { BarChart4Component } from './elements/widget/charts/bar-chart4/bar-chart4.component';
import { BarChart5Component } from './elements/widget/charts/bar-chart5/bar-chart5.component';
import { AreaChart3Component } from './elements/widget/charts/area-chart3/area-chart3.component';
import { BarChart6Component } from './elements/widget/charts/bar-chart6/bar-chart6.component';
import { MarketNowComponent } from './elements/widget/charts/market-now/market-now.component';
import { SalesAnalysisComponent } from './elements/widget/charts/sales-analysis/sales-analysis.component';
import { TopProducts1Component } from './elements/widget/charts/top-products1/top-products1.component';
import { TopProducts2Component } from './elements/widget/charts/top-products2/top-products2.component';
import { WeeklySalesComponent } from './elements/widget/charts/weekly-sales/weekly-sales.component';
import { SalesStatusComponent } from './elements/widget/charts/sales-status/sales-status.component';
import { AllSales1Component } from './elements/widget/charts/all-sales1/all-sales1.component';
import { AllSales2Component } from './elements/widget/charts/all-sales2/all-sales2.component';

import { ElementsComponent } from './forms/elements/elements.component';
import { FormValidateComponent } from './forms/form-validate/form-validate.component';


import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LockScreenComponent } from './pages/lock-screen/lock-screen.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { Error400Component } from './pages/error400/error400.component';
import { Error403Component } from './pages/error403/error403.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { Error503Component } from './pages/error503/error503.component';
import { AuthService } from './core/auth.service';
import { WinrateDoughnutComponent } from './dashboard/winrate-doughnut/winrate-doughnut.component';
import { DropdownAccountComponent } from './dashboard/dropdown-account/dropdown-account.component';
import { DashboardCarouselComponent } from './dashboard/dashboard-carousel/dashboard-carousel.component';
import { TableDashboardComponent } from './dashboard/table-dashboard/table-dashboard.component';
import { BalanceAreaComponent } from './dashboard/balance-area/balance-area.component';
import { BalanceAreaMonthlyComponent } from './dashboard/balance-area-monthly/balance-area-monthly.component';
import { BalanceAreaYearlyComponent } from './dashboard/balance-area-yearly/balance-area-yearly.component';
import { BalanceAreaAllComponent } from './dashboard/balance-area-all/balance-area-all.component';
import { BalanceAreaWeekComponent } from './dashboard/balance-area-week/balance-area-week.component';
import { WithdrawPageComponent } from './withdraw-page/withdraw-page.component';
import { AuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    NgbdSortableHeader,

    AdminComponent,
    NavHeaderComponent,
    NavigationComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,

    Index1Component,
    Graph1Component,
    Graph2Component,
    Graph3Component,
    Graph4Component,
    GraphMarketOverviewComponent,
    WeeklyComponent,
    MonthlyComponent,
    YearlyComponent,
    GraphCryptoStatisticsComponent,
    QuickTransferComponent,
    SellOrderComponent,
    BuyOrderComponent,

    Index2Component,
    Das2Graph1Component,
    Das2Graph2Component,
    Das2Graph3Component,
    GraphCoinChartComponent,
    MarketInfoComponent,
    DashboardCrousal1Component,
    Das2QuickTransferComponent,
    Das2SellOrderComponent,
    Das2BuyOrderComponent,

    Index3Component,
    BuySellFormComponent,
    Das3Graph1Component,

    Index4Component,

    CoinDetailsComponent,
    AboutComponent,
    CoinDetailQuickTransferComponent,

    MyWalletsComponent,
    CardSliderComponent,
    CardDetailsComponent,
    GraphMainLimitComponent,
    GraphSecondsComponent,
    GraphOthersComponent,
    DetailPieChartComponent,
    WalletCoinChartComponent,
    WalletActivityComponent,

    TransactionsComponent,

    PortofolioComponent,
    MyProfileComponent,
    CoinHoldingComponent,
    CurrentGraph1Component,
    CurrentGraph2Component,

    MarketCapitalComponent,

    ProfileComponent,
    UserStatisticsComponent,
    InterestComponent,
    LatestNewsComponent,
    HighlightsComponent,

    PostDetailsComponent,

    ComposeComponent,
    InboxComponent,
    ReadComponent,

    CalenderComponent,

    ProductGridComponent,
    ProductListComponent,
    ProductDetailComponent,
    OrderComponent,
    CheckoutComponent,
    InvoiceComponent,
    EcomCustomersComponent,

    ApexComponent,
    LineComponent,
    BasicLineChartComponent,
    LineChartWithDatalabelsComponent,
    ZoomableTimeseriesComponent,
    LineWithAnnotationsComponent,
    SyncingChartsComponent,
    BrushChartComponent,
    SteplineChartComponent,
    GradientLineChartComponent,
    MissingOrNullValuesComponent,
    DashedLineChartComponent,
    AreaComponent,
    AreaBasicComponent,
    AreaNegativeComponent,
    AreaGithubStyleComponent,
    AreaSplineComponent,
    AreaStackedComponent,
    AreaIrregularTimeseriesComponent,
    AreaMissingOrNullValuesComponent,
    ColumnComponent,
    ColumnBasicComponent,
    ColumnDataLabelsComponent,
    ColumnStackedComponent,
    ColumnStacked100Component,
    ColumnRotatedLabelsComponent,
    ColumnNegativeValuesComponent,
    ColumnLoadedChartComponent,
    ColumnDistributedComponent,
    ColumnRangeComponent,
    BarComponent,
    BarBasicComponent,
    BarGroupedComponent,
    BarStackedComponent,
    BarStacked100Component,
    BarNegativeValuesComponent,
    BarReversedComponent,
    BarCustomDataLabelsComponent,
    BarPatternedComponent,
    BarImagesComponent,
    MixedComponent,
    MixedLineColumnComponent,
    MixedMultipleYAxisComponent,
    MixedLineAreaComponent,
    MixedLineColumnAreaComponent,
    TimelineComponent,
    TimelineBasicComponent,
    TimelineDistributedComponent,
    TimelineMultiSeriesComponent,
    TimelineAdvancedComponent,
    TimelineMultipleSeriesComponent,
    CandlestickComponent,
    CandlestickBasicComponent,
    CandlestickComboComponent,
    CandlestickCategoryComponent,
    CandlestickLineComponent,
    PieComponent,
    PieSimpleComponent,
    PieDonutComponent,
    PieMonochromeComponent,
    PieGradientDonutComponent,
    SemiDonutComponent,
    DonutWithPatternComponent,
    RadarComponent,
    RadarBasicComponent,
    RadarMultipleSeriesComponent,
    RadialbarComponent,
    RadialbarBasicComponent,
    RadialbarMultipleComponent,
    RadialbarCustomAngleCircleComponent,
    RadialbarGradientComponent,
    RadialbarStrokedAngularGaugeComponent,
    RadialbarSemiCircleGaugeComponent,
    PolarAreaComponent,
    PolarAreaBasicComponent,
    PolarAreaMonochromeComponent,
    BubbleComponent,
    BubbleSimpleComponent,
    Bubble3DComponent,
    ScatterComponent,
    ScatterBasicComponent,
    ScatterDatetimeComponent,
    ScatterImagesComponent,
    HeatmapComponent,
    HeatmapBasicComponent,
    HeatmapMultipleColorsComponent,
    HeatmapMultipleFlippedComponent,
    HeatmapColorRangeComponent,
    HeatmapRoundedComponent,
    TreemapComponent,
    TreemapBasicComponent,
    TreemapMultipleSeriesComponent,
    TreemapColorRangeComponent,
    TreemapDistributedComponent,
    SparklinesComponent,
    SparklinesBasicComponent,
    ChartjsComponent,
    ChartjsLineComponent,
    ChartjsBarComponent,
    ChartjsDoughnutComponent,
    ChartjsRadarComponent,
    ChartjsPieComponent,
    ChartjsBubbleComponent,



    AccordionComponent,
    AccordionBasicComponent,
    AccordionStaticComponent,
    AccordionToggleComponent,
    AccordionHeaderComponent,
    AccordionPreventchangeComponent,
    AccordionConfigComponent,

    AlertComponent,
    AlertCloseableComponent,
    AlertBasicComponent,
    AlertSlefclosingComponent,
    AlertCustomComponent,
    AlertConfigComponent,


    ButtonComponent,

    ModalComponent,
    BasicModalComponent,
    ModalComponentComponent,
    ModalOptionsComponent,
    ModalFocusComponent,
    ModalStackedComponent,
    ModalConfigComponent,

    BadgeComponent,

    ButtonGroupComponent,

    ListGroupComponent,

    CarouselComponent,
    CarouselBasicComponent,
    CarouselNavigationComponent,
    CarouselPauseComponent,
    CarouselConfigComponent,

    DatepickerComponent,
    DatepickerBasicComponent,
    DatepickerPopupComponent,
    DatepickerMultipleComponent,
    DatepickerRangeComponent,
    DatepickerRangePopupComponent,
    DatepickerDisabledComponent,
    DatepickerAdapterComponent,
    DatepickerI18nComponent,
    DatepickerCustomdayComponent,
    DatepickerCustommonthComponent,
    DatepickerFootertemplateComponent,
    DatepickerPositiontargetComponent,
    DatepickerKeyboardComponent,
    DatepickerConfigComponent,

    DropdownComponent,
    DropdownBasicComponent,
    DropdownManualComponent,
    DropdownSplitComponent,
    DropdownFormComponent,
    DropdownContainerComponent,
    DropdownNavbarComponent,
    DropdownConfigComponent,

    MediaObjectComponent,

    NavComponent,
    NavMarkupComponent,
    NavVerticalComponent,
    NavSelectionComponent,
    NavKeepContentComponent,
    NavDynamicComponent,
    NavCustomStyleComponent,
    NavConfigComponent,
    NavBasicComponent,

    PaginationComponent,
    PaginationBasicComponent,
    PaginationAdvancedComponent,
    PaginationCustomizationComponent,
    PaginationSizeComponent,
    PaginationJustifyComponent,
    PaginationDisabledComponent,
    PaginationConfigComponent,

    PopoverComponent,
    PopoverBasicComponent,
    PopoverTplcontentComponent,
    PopoverTriggersComponent,
    PopoverAutocloseComponent,
    PopoverTplwithcontextComponent,
    PopoverDelayComponent,
    PopoverVisibilityComponent,
    PopoverContainerComponent,
    PopoverCustomclassComponent,
    PopoverConfigComponent,

    ProgressbarComponent,
    ProgressbarBasicComponent,
    ProgressbarTexttypesComponent,
    ProgressbarShowvalueComponent,
    ProgressbarStripedComponent,
    ProgressbarLabelsComponent,
    ProgressbarHeightComponent,
    ProgressbarConfigComponent,

    RatingComponent,
    RatingBasicComponent,
    RatingEventsComponent,
    RatingTemplateComponent,
    RatingDecimalComponent,
    RatingFormComponent,
    RatingConfigComponent,

    TableComponent,
    TableBasicComponent,
    TableSortableComponent,
    TableFilteringComponent,
    TablePaginationComponent,
    TableCompleteComponent,

    TimepickerComponent,
    TimepickerBasicComponent,
    TimepickerMeridianComponent,
    TimepickerSecondsComponent,
    TimepickerSpinnersComponent,
    TimepickerStepsComponent,
    TimepickerValidationComponent,
    TimepickerAdapterComponent,
    TimepickerI18nComponent,
    TimepickerConfigComponent,

    ToastComponent,
    ToastInlineComponent,
    ToastCustomComponent,
    ToastCloseableComponent,
    ToastPreventAutohideComponent,
    ToastGlobalComponent,
    ToastsContainer,
    TooltipComponent,
    TooltipBasicComponent,
    TooltipTplcontentComponent,
    TooltipTriggersComponent,
    TooltipAutocloseComponent,
    TooltipTplwithcontextComponent,
    TooltipDelayComponent,
    TooltipContainerComponent,
    TooltipCustomclassComponent,
    TooltipConfigComponent,

    TypeaheadComponent,
    TypeaheadBasicComponent,
    TypeaheadFocusComponent,
    TypeaheadFormatComponent,
    TypeaheadHttpComponent,
    TypeaheadTemplateComponent,
    TypeaheadPreventManualEntryComponent,
    TypeaheadConfigComponent,

    CardsComponent,
    TypographyComponent,
    GridComponent,
    NestableComponent,
    LightGalleryComponent,

    WidgetComponent,
    Timeline1Component,
    Timeline2Component,
    Notifications1Component,
    Notifications2Component,
    MessageComponent,
    TodolistComponent,
    PieChart1Component,
    BarChart1Component,
    BarChart2Component,
    AreaChart1Component,
    VisitorActivityComponent,
    VisitorActivityDayComponent,
    VisitorActivityMonthComponent,
    VisitorActivityYearComponent,
    ChartjsActiveUsersComponent,
    BloodPressureComponent,
    HeartRateComponent,
    GlucoseRateComponent,
    ClolesterolComponent,
    BarChart3Component,
    AreaChart2Component,
    BarChart4Component,
    BarChart5Component,
    AreaChart3Component,
    BarChart6Component,
    MarketNowComponent,
    SalesAnalysisComponent,
    TopProducts1Component,
    TopProducts2Component,
    WeeklySalesComponent,
    SalesStatusComponent,
    AllSales1Component,
    AllSales2Component,

    ElementsComponent,
    FormValidateComponent,

	RegisterComponent,
	LoginComponent,
	LockScreenComponent,
	ForgotPasswordComponent,
	Error400Component,
	Error403Component,
	Error404Component,
	Error500Component,
	Error503Component,
  WinrateDoughnutComponent,
  DropdownAccountComponent,
  DashboardCarouselComponent,
  TableDashboardComponent,
  BalanceAreaComponent,
  BalanceAreaMonthlyComponent,
  BalanceAreaYearlyComponent,
  BalanceAreaAllComponent,
  BalanceAreaWeekComponent,
  WithdrawPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ChartsModule,
    NgApexchartsModule,
    NestableModule,
    NgxSpinnerModule,
    LightboxModule,
    FullCalendarModule,
    MetismenuAngularModule,
    PerfectScrollbarModule,
    NgxDropzoneModule,
    CarouselModule,

    MatListModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule,
    MatTabsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    DragDropModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatExpansionModule,
    MatSelectModule,
    MatGridListModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  providers: [
		SharedService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
