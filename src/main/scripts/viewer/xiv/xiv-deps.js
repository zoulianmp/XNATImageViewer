// This file was autogenerated by closure-library/closure/bin/build/depswriter.py.
// Please do not edit.
goog.addDependency('../../../xiv/sample-data/Sample.js', ['xiv.sampleData.Sample'], []);
goog.addDependency('../../../xiv/sample-data/SampleCollection.js', ['xiv.sampleData.SampleCollection'], ['goog.Disposable', 'goog.array', 'goog.object', 'xiv.sampleData.Sample']);
goog.addDependency('../../../xiv/sample-data/Scans.js', ['xiv.sampleData.Scans'], ['xiv.sampleData.Sample', 'xiv.sampleData.SampleCollection']);
goog.addDependency('../../../xiv/sample-data/SlicerScenes.js', ['xiv.sampleData.SlicerScenes'], ['xiv.sampleData.Sample', 'xiv.sampleData.SampleCollection']);
goog.addDependency('../../../xiv/sample-data/sampleData.js', ['xiv.sampleData'], []);
goog.addDependency('../../../xiv/ui/HelpDialog.js', ['xiv.ui.HelpDialog'], ['goog.array', 'goog.dom', 'goog.dom.classes', 'nrg.ui.Dialog', 'nrg.ui.ScrollableZippyTree']);
goog.addDependency('../../../xiv/ui/Modal.js', ['xiv.ui.Modal'], ['goog.array', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.events.Event', 'goog.fx', 'goog.fx.AnimationParallelQueue', 'goog.fx.dom.PredefinedEffect', 'goog.fx.dom.Resize', 'goog.fx.dom.Slide', 'goog.object', 'goog.string', 'goog.style', 'nrg.convert', 'nrg.dom', 'nrg.fx', 'nrg.string', 'nrg.style', 'nrg.ui.Component', 'nrg.ui.Resizable', 'nrg.ui.Thumbnail', 'nrg.ui.ZipTabs', 'xiv.ui.ThumbnailGallery', 'xiv.ui.ViewBox', 'xiv.ui.ViewBoxHandler']);
goog.addDependency('../../../xiv/ui/ProgressBarPanel.js', ['xiv.ui.ProgressBarPanel'], ['goog.dom', 'goog.dom.classes', 'goog.string', 'goog.ui.ProgressBar', 'nrg.ui.Component']);
goog.addDependency('../../../xiv/ui/Thumbnail.js', ['xiv.ui.Thumbnail'], ['goog.array', 'goog.dom', 'goog.dom.classes', 'goog.string', 'gxnat.vis.ViewableTree', 'nrg.ui.Thumbnail']);
goog.addDependency('../../../xiv/ui/ThumbnailGallery.js', ['xiv.ui.ThumbnailGallery'], ['goog.array', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.fx.DragDrop', 'goog.fx.DragDropGroup', 'goog.object', 'goog.string', 'gxnat.vis.ViewableTree', 'nrg.fx', 'nrg.string', 'nrg.ui.Resizable', 'nrg.ui.Thumbnail', 'nrg.ui.ThumbnailGallery', 'xiv.ui.Thumbnail']);
goog.addDependency('../../../xiv/ui/ViewBox.js', ['xiv.ui.ViewBox'], ['goog.Timer', 'goog.array', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.format', 'goog.object', 'goog.string', 'goog.style', 'goog.testing', 'goog.testing.events', 'gxnat', 'gxnat.vis.ViewableGroup', 'gxnat.vis.ViewableTree', 'nrg.fx', 'nrg.style', 'nrg.ui.Component', 'nrg.ui.ErrorOverlay', 'nrg.ui.SlideInMenu', 'xiv.ui.ProgressBarPanel', 'xiv.ui.ViewBoxDialogs', 'xiv.ui.ViewBoxInteractorHandler', 'xiv.ui.ViewableGroupMenu', 'xiv.ui.layouts.LayoutHandler', 'xiv.vis.RenderEngine', 'xiv.vis.XtkEngine']);
goog.addDependency('../../../xiv/ui/ViewBoxDialogs.js', ['xiv.ui.ViewBoxDialogs'], ['goog.dom', 'goog.dom.classes', 'goog.events', 'goog.object', 'goog.string', 'goog.string.path', 'goog.testing.events', 'goog.ui.Dialog', 'goog.ui.Dialog.ButtonSet', 'goog.ui.ToggleButton', 'nrg.fx', 'nrg.ui.Component', 'nrg.ui.Dialog', 'xiv.ui.HelpDialog']);
goog.addDependency('../../../xiv/ui/ViewBoxHandler.js', ['xiv.ui.ViewBoxHandler'], ['goog.array', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.fx', 'goog.fx.AnimationParallelQueue', 'goog.fx.DragDrop', 'goog.fx.DragDropGroup', 'goog.fx.dom.Slide', 'goog.fx.easing', 'goog.object', 'goog.string', 'goog.style', 'gxnat.vis.VisNode', 'nrg.fx', 'nrg.string', 'nrg.style', 'nrg.ui.Component', 'xiv.ui.ViewBox']);
goog.addDependency('../../../xiv/ui/ViewBoxInteractorHandler.js', ['xiv.ui.ViewBoxInteractorHandler'], ['X.volume', 'goog.array', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.events.Event', 'goog.events.EventTarget', 'goog.events.Key', 'goog.events.KeyHandler', 'goog.math.Vec2', 'goog.object', 'goog.string', 'nrg.fx', 'nrg.ui.Dialog', 'nrg.ui.ScrollableZippyTree', 'nrg.ui.SlideInMenu', 'nrg.ui.Slider', 'nrg.ui.ZippyNode', 'xiv.ui.ViewBoxDialogs', 'xiv.ui.ctrl.CheckboxController', 'xiv.ui.ctrl.Histogram', 'xiv.ui.ctrl.RadioButtonController', 'xiv.ui.ctrl.XtkController', 'xiv.ui.ctrl.XtkControllerTree', 'xiv.ui.layouts.Conventional', 'xiv.ui.layouts.Coronal', 'xiv.ui.layouts.FourUp', 'xiv.ui.layouts.Layout', 'xiv.ui.layouts.LayoutHandler', 'xiv.ui.layouts.Sagittal', 'xiv.ui.layouts.ThreeD', 'xiv.ui.layouts.Transverse', 'xiv.ui.layouts.TwoDRow', 'xiv.ui.layouts.TwoDWidescreen', 'xiv.ui.layouts.interactors.FrameDisplay', 'xiv.ui.layouts.interactors.InputController', 'xiv.ui.layouts.interactors.ZoomDisplay', 'xiv.vis.RenderEngine', 'xiv.vis.XtkEngine', 'xiv.vis.XtkRenderer2D']);
goog.addDependency('../../../xiv/ui/ViewableGroupMenu.js', ['xiv.ui.ViewableGroupMenu'], ['goog.array', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.string', 'nrg.dom', 'nrg.fx', 'nrg.style', 'nrg.ui.Component', 'nrg.ui.Thumbnail', 'nrg.ui.ThumbnailGallery']);
goog.addDependency('../../../xiv/ui/ctrl/AnnotationsController3D.js', ['xiv.ui.ctrl.AnnotationsController3D'], ['goog.object', 'xiv.ui.ctrl.CheckboxController', 'xiv.ui.ctrl.ColorPaletteController', 'xiv.ui.ctrl.MasterController3D']);
goog.addDependency('../../../xiv/ui/ctrl/CheckboxController.js', ['xiv.ui.ctrl.CheckboxController'], ['goog.dom', 'goog.dom.classes', 'goog.events', 'goog.string', 'goog.ui.Checkbox', 'xiv.ui.ctrl.XtkController']);
goog.addDependency('../../../xiv/ui/ctrl/ColorPaletteController.js', ['xiv.ui.ctrl.ColorPaletteController'], ['goog.color', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.string', 'goog.style', 'goog.ui.HsvPalette', 'xiv.ui.ctrl.XtkController']);
goog.addDependency('../../../xiv/ui/ctrl/Histogram.js', ['xiv.ui.ctrl.Histogram'], ['goog.array', 'goog.dom', 'goog.string', 'goog.style', 'xiv.ui.ctrl.XtkController']);
goog.addDependency('../../../xiv/ui/ctrl/LevelsController.js', ['xiv.ui.ctrl.LevelsController'], ['X.object', 'goog.array', 'goog.events', 'goog.object', 'nrg.ui.Slider', 'xiv.ui.ctrl.Histogram', 'xiv.ui.ctrl.MasterController', 'xiv.ui.ctrl.SliderController', 'xiv.ui.ctrl.XtkController']);
goog.addDependency('../../../xiv/ui/ctrl/MasterController.js', ['xiv.ui.ctrl.MasterController'], ['X.object', 'goog.array', 'goog.object', 'xiv.ui.ctrl.CheckboxController', 'xiv.ui.ctrl.SliderController', 'xiv.ui.ctrl.TwoThumbSliderController', 'xiv.ui.ctrl.XtkController']);
goog.addDependency('../../../xiv/ui/ctrl/MasterController2D.js', ['xiv.ui.ctrl.MasterController2D'], ['X.object', 'goog.array', 'goog.object', 'xiv.ui.ctrl.CheckboxController', 'xiv.ui.ctrl.RadioButtonController', 'xiv.ui.ctrl.XtkController']);
goog.addDependency('../../../xiv/ui/ctrl/MasterController3D.js', ['xiv.ui.ctrl.MasterController3D'], ['X.object', 'goog.array', 'goog.dom', 'goog.object', 'xiv.ui.ctrl.CheckboxController', 'xiv.ui.ctrl.SliderController', 'xiv.ui.ctrl.TwoThumbSliderController', 'xiv.ui.ctrl.XtkController']);
goog.addDependency('../../../xiv/ui/ctrl/MeshController3D.js', ['xiv.ui.ctrl.MeshController3D'], ['goog.object', 'xiv.ui.ctrl.CheckboxController', 'xiv.ui.ctrl.ColorPaletteController', 'xiv.ui.ctrl.MasterController3D']);
goog.addDependency('../../../xiv/ui/ctrl/RadioButtonController.js', ['xiv.ui.ctrl.RadioButtonController'], ['goog.dom', 'goog.dom.classes', 'goog.events', 'goog.string', 'xiv.ui.ctrl.XtkController']);
goog.addDependency('../../../xiv/ui/ctrl/SliderController.js', ['xiv.ui.ctrl.SliderController'], ['goog.dom', 'goog.dom.classes', 'goog.events', 'goog.math', 'nrg.ui.Slider', 'xiv.ui.ctrl.XtkController']);
goog.addDependency('../../../xiv/ui/ctrl/TwoThumbSliderController.js', ['xiv.ui.ctrl.TwoThumbSliderController'], ['goog.dom', 'goog.dom.classes', 'goog.events', 'goog.string', 'goog.style', 'goog.ui.RangeModel', 'goog.ui.TwoThumbSlider', 'nrg.style', 'xiv.ui.ctrl.XtkController']);
goog.addDependency('../../../xiv/ui/ctrl/VolumeController.js', ['xiv.ui.ctrl.VolumeController'], ['X.object', 'goog.object', 'xiv.ui.ctrl.CheckboxController', 'xiv.ui.ctrl.MasterController', 'xiv.ui.ctrl.MasterController2D', 'xiv.ui.ctrl.RadioButtonController', 'xiv.ui.ctrl.XtkController', 'xiv.vis.RenderEngine']);
goog.addDependency('../../../xiv/ui/ctrl/VolumeController3D.js', ['xiv.ui.ctrl.VolumeController3D'], ['X.object', 'goog.object', 'goog.string', 'xiv.ui.ctrl.CheckboxController', 'xiv.ui.ctrl.MasterController3D', 'xiv.ui.ctrl.TwoThumbSliderController', 'xiv.ui.ctrl.XtkController']);
goog.addDependency('../../../xiv/ui/ctrl/XtkController.js', ['xiv.ui.ctrl.XtkController'], ['X.fibers', 'X.mesh', 'X.object', 'X.sphere', 'X.volume', 'goog.array', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.string', 'goog.string.path', 'goog.ui.Checkbox', 'goog.ui.Component', 'goog.ui.TwoThumbSlider', 'nrg.array', 'nrg.dom', 'nrg.string', 'nrg.style', 'nrg.ui.Component', 'nrg.ui.ZippyTree']);
goog.addDependency('../../../xiv/ui/ctrl/XtkControllerTree.js', ['xiv.ui.ctrl.XtkControllerTree', 'xiv.ui.ctrl.XtkControllerTree.ControlSet'], ['X.fibers', 'X.mesh', 'X.object', 'X.sphere', 'X.volume', 'goog.array', 'goog.object', 'gxnat.vis.RenderProperties', 'nrg.ui.Component', 'xiv.ui.ctrl.AnnotationsController3D', 'xiv.ui.ctrl.LevelsController', 'xiv.ui.ctrl.MasterController2D', 'xiv.ui.ctrl.MasterController3D', 'xiv.ui.ctrl.MeshController3D', 'xiv.ui.ctrl.VolumeController', 'xiv.ui.ctrl.VolumeController3D', 'xiv.ui.ctrl.XtkController']);
goog.addDependency('../../../xiv/ui/layouts/Conventional.js', ['xiv.ui.layouts.Conventional'], ['goog.array', 'goog.events', 'goog.object', 'goog.string', 'goog.style', 'nrg.string', 'nrg.style', 'nrg.ui.Resizable', 'xiv.ui.layouts.Layout', 'xiv.ui.layouts.XyzvLayout']);
goog.addDependency('../../../xiv/ui/layouts/Coronal.js', ['xiv.ui.layouts.Coronal'], ['goog.dom.classes', 'nrg.string', 'xiv.ui.layouts.SingleFrameLayout']);
goog.addDependency('../../../xiv/ui/layouts/FourUp.js', ['xiv.ui.layouts.FourUp'], ['goog.array', 'goog.events', 'goog.string', 'goog.style', 'nrg.string', 'nrg.ui.Resizable', 'xiv.ui.layouts.XyzvLayout']);
goog.addDependency('../../../xiv/ui/layouts/Layout.js', ['xiv.ui.layouts.Layout'], ['goog.array', 'goog.events', 'goog.object', 'goog.string', 'nrg.string', 'nrg.ui.Component', 'xiv.ui.layouts.LayoutFrame']);
goog.addDependency('../../../xiv/ui/layouts/LayoutFrame.js', ['xiv.ui.layouts.LayoutFrame'], ['goog.array', 'goog.string', 'nrg.string', 'nrg.ui.Component', 'nrg.ui.Resizable']);
goog.addDependency('../../../xiv/ui/layouts/LayoutHandler.js', ['xiv.ui.layouts.LayoutHandler'], ['goog.array', 'goog.dom', 'goog.events', 'goog.fx.Animation', 'goog.fx.AnimationParallelQueue', 'goog.fx.dom.BgColorTransform', 'goog.fx.dom.FadeInAndShow', 'goog.fx.dom.FadeOut', 'goog.fx.dom.Resize', 'goog.fx.dom.Slide', 'goog.object', 'goog.string', 'goog.style', 'nrg.array', 'nrg.dom', 'nrg.fx', 'nrg.string', 'nrg.style', 'nrg.ui.Component', 'xiv.ui.layouts.Conventional', 'xiv.ui.layouts.Coronal', 'xiv.ui.layouts.FourUp', 'xiv.ui.layouts.Layout', 'xiv.ui.layouts.LayoutFrame', 'xiv.ui.layouts.Sagittal', 'xiv.ui.layouts.ThreeD', 'xiv.ui.layouts.Transverse', 'xiv.ui.layouts.TwoDRow', 'xiv.ui.layouts.TwoDWidescreen', 'xiv.ui.layouts.XyzvLayout']);
goog.addDependency('../../../xiv/ui/layouts/Sagittal.js', ['xiv.ui.layouts.Sagittal'], ['goog.dom.classes', 'nrg.string', 'xiv.ui.layouts.SingleFrameLayout']);
goog.addDependency('../../../xiv/ui/layouts/SingleFrameLayout.js', ['xiv.ui.layouts.SingleFrameLayout'], ['goog.style', 'xiv.ui.layouts.XyzvLayout']);
goog.addDependency('../../../xiv/ui/layouts/ThreeD.js', ['xiv.ui.layouts.ThreeD'], ['goog.dom.classes', 'nrg.string', 'xiv.ui.layouts.SingleFrameLayout']);
goog.addDependency('../../../xiv/ui/layouts/Transverse.js', ['xiv.ui.layouts.Transverse'], ['goog.dom.classes', 'nrg.string', 'xiv.ui.layouts.SingleFrameLayout']);
goog.addDependency('../../../xiv/ui/layouts/TwoDRow.js', ['xiv.ui.layouts.TwoDRow'], ['goog.array', 'goog.events', 'goog.string', 'goog.style', 'nrg.string', 'nrg.style', 'nrg.ui.Resizable', 'xiv.ui.layouts.Layout', 'xiv.ui.layouts.XyzvLayout']);
goog.addDependency('../../../xiv/ui/layouts/TwoDWidescreen.js', ['xiv.ui.layouts.TwoDWidescreen'], ['goog.array', 'goog.events', 'goog.string', 'goog.style', 'nrg.string', 'nrg.style', 'nrg.ui.Resizable', 'xiv.ui.layouts.Layout', 'xiv.ui.layouts.XyzvLayout']);
goog.addDependency('../../../xiv/ui/layouts/XyzvLayout.js', ['xiv.ui.layouts.XyzvLayout'], ['goog.array', 'goog.dom', 'goog.dom.classes', 'goog.object', 'goog.string', 'goog.style', 'nrg.string', 'nrg.ui.Slider', 'xiv.ui.layouts.Layout', 'xiv.ui.layouts.LayoutFrame', 'xiv.ui.layouts.interactors.Crosshairs', 'xiv.ui.layouts.interactors.FrameDisplay', 'xiv.ui.layouts.interactors.Slider', 'xiv.ui.layouts.interactors.ZoomDisplay']);
goog.addDependency('../../../xiv/ui/layouts/interactors/Crosshairs.js', ['xiv.ui.layouts.interactors.Crosshairs'], ['goog.dom', 'goog.object', 'goog.string', 'nrg.ui.Component']);
goog.addDependency('../../../xiv/ui/layouts/interactors/FrameDisplay.js', ['xiv.ui.layouts.interactors.FrameDisplay'], ['goog.dom', 'nrg.ui.Component', 'xiv.ui.layouts.interactors.InputController']);
goog.addDependency('../../../xiv/ui/layouts/interactors/InputController.js', ['xiv.ui.layouts.interactors.InputController'], ['goog.dom', 'goog.dom.classes', 'goog.events', 'nrg.ui.Component']);
goog.addDependency('../../../xiv/ui/layouts/interactors/Slider.js', ['xiv.ui.layouts.interactors.Slider'], ['goog.dom', 'nrg.ui.Slider']);
goog.addDependency('../../../xiv/ui/layouts/interactors/ZoomDisplay.js', ['xiv.ui.layouts.interactors.ZoomDisplay'], ['goog.cssom', 'goog.dom', 'nrg.ui.Component', 'xiv.ui.layouts.interactors.InputController', 'xiv.vis.XtkRenderer2D']);
goog.addDependency('../../../xiv/ui/ui.js', ['xiv.ui'], []);
goog.addDependency('../../../xiv/vis/RenderEngine.js', ['xiv.vis.RenderEngine'], ['goog.events', 'goog.events.EventTarget']);
goog.addDependency('../../../xiv/vis/XtkEngine.js', ['xiv.vis.XtkEngine'], ['X.fibers', 'X.mesh', 'X.object', 'X.renderer', 'X.renderer2D', 'X.renderer3D', 'X.sphere', 'X.volume', 'goog.array', 'goog.events', 'goog.object', 'goog.string', 'goog.string.path', 'gxnat.slicerNode.Annotations', 'gxnat.vis.RenderProperties', 'gxnat.vis.ViewableGroup', 'nrg.string', 'xiv.ui.ctrl.XtkController', 'xiv.ui.ctrl.XtkControllerTree', 'xiv.vis.RenderEngine', 'xiv.vis.XtkPlane', 'xiv.vis.XtkPlane2D', 'xiv.vis.XtkPlane3D']);
goog.addDependency('../../../xiv/vis/XtkPlane.js', ['xiv.vis.XtkPlane'], ['X.camera', 'X.object', 'X.renderer2D', 'goog.Timer', 'goog.array', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.events.EventTarget', 'goog.string', 'gxnat.slicerNode.BackgroundColor', 'nrg.fx', 'xiv.vis.RenderEngine']);
goog.addDependency('../../../xiv/vis/XtkPlane2D.js', ['xiv.vis.XtkPlane2D'], ['xiv.vis.XtkPlane', 'xiv.vis.XtkRenderer2D']);
goog.addDependency('../../../xiv/vis/XtkPlane3D.js', ['xiv.vis.XtkPlane3D'], ['xiv.vis.XtkPlane', 'xiv.vis.XtkRenderer3D']);
goog.addDependency('../../../xiv/vis/XtkRenderer2D.js', ['xiv.vis.XtkRenderer2D'], ['X.camera2D', 'X.interactor', 'X.renderer', 'X.renderer2D', 'X.volume', 'goog.events', 'goog.math.Matrix', 'xiv.vis.RenderEngine']);
goog.addDependency('../../../xiv/vis/XtkRenderer3D.js', ['xiv.vis.XtkRenderer3D'], ['X', 'X.renderer3D', 'xiv.vis.RenderEngine']);
goog.addDependency('../../../xiv/vis/vis.js', ['xiv.vis'], []);
goog.addDependency('../../../xiv/xiv.js', ['xiv', 'xiv.start'], ['X.loader', 'X.parserIMA', 'goog.Disposable', 'goog.Timer', 'goog.array', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.events.EventType', 'goog.labs.userAgent.browser', 'goog.object', 'goog.string', 'goog.window', 'gxnat', 'gxnat.Path', 'gxnat.ProjectTree', 'gxnat.vis.AjaxViewableTree', 'gxnat.vis.Scan', 'gxnat.vis.Slicer', 'gxnat.vis.ViewableTree', 'nrg.fx', 'nrg.ui.ErrorOverlay', 'nrg.ui.ZippyNode']);
