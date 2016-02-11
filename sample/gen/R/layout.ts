///<reference path="../../../dist/android-ui.d.ts"/>
module sample.app.R {
    const _layout_data = {
        "sample_animation": "<scrollview>\n    <linearlayout android:padding=\"0 6dp\" gravity=\"center\" android:orientation=\"vertical\">\n        <textview gravity=\"center\">Rotate:</textview>\n        <imageview id=\"rotate_repeat\" android:src=\"assets/images/logo_android_1@2x.png\" android:layout_width=\"56dp\" android:layout_height=\"56dp\" android:layout_margin=\"20dp 12dp\"></imageview>\n        <textview gravity=\"center\">Translate:</textview>\n        <imageview id=\"translate_repeat\" android:src=\"assets/images/logo_android_1@2x.png\" android:layout_width=\"56dp\" android:layout_height=\"56dp\" android:layout_margin=\"12dp\"></imageview>\n        <textview gravity=\"center\">Scale:</textview>\n        <imageview id=\"scale_repeat\" android:src=\"assets/images/logo_android_1@2x.png\" android:layout_width=\"56dp\" android:layout_height=\"56dp\" android:layout_margin=\"12dp\"></imageview>\n        <textview gravity=\"center\">Alpha:</textview>\n        <imageview id=\"alpha_repeat\" android:src=\"assets/images/logo_android_1@2x.png\" android:layout_width=\"56dp\" android:layout_height=\"56dp\" android:layout_margin=\"12dp\"></imageview>\n        <textview gravity=\"center\">Animation Set:</textview>\n        <imageview id=\"anim_set\" android:src=\"assets/images/logo_android_1@2x.png\" android:layout_width=\"56dp\" android:layout_height=\"56dp\" android:layout_margin=\"12dp\"></imageview>\n    </linearlayout>\n</scrollview>",
        "sample_base_widget": "<scrollview>\n    <linearlayout android:orientation=\"vertical\" android:padding=\"12dp\" android:gravity=\"center\">\n        <textview android:layout_width=\"wrap_content\">\n            TextView\n        </textview>\n        <button android:layout_width=\"wrap_content\">\n            Button\n        </button>\n        <imageview android:src=\"assets/images/logo_google_3.png\">\n        </imageview>\n        <checkbox android:layout_width=\"wrap_content\" android:layout_marginbottom=\"12dp\">\n            CheckBox\n        </checkbox>\n        <radiogroup android:gravity=\"center\" android:orientation=\"HORIZONTAL\" android:layout_marginbottom=\"12dp\">\n            <radiobutton android:layout_width=\"wrap_content\">\n                Radio1\n            </radiobutton>\n            <radiobutton android:layout_width=\"wrap_content\">\n                Radio2\n            </radiobutton>\n            <radiobutton android:layout_width=\"wrap_content\">\n                Radio3\n            </radiobutton>\n        </radiogroup>\n        <button id=\"btn_open_dialog\" android:layout_width=\"wrap_content\">\n            OpenDialog\n        </button>\n        <spinner android:layout_width=\"wrap_content\" android:entries=\"[&quot;Item1&quot;, &quot;Item2&quot;, &quot;Item3&quot;, &quot;Item4&quot;, &quot;Item5&quot;, &quot;Item6&quot;, &quot;Item7&quot;]\">\n        </spinner>\n        <button id=\"btn_show_popup\" android:layout_width=\"wrap_content\">\n            PopupWindow\n        </button>\n\n        <progressbar android:layout_height=\"wrap_content\" android:layout_width=\"wrap_content\" android:layout_marginbottom=\"12dp\"></progressbar>\n        <progressbar android:layout_height=\"wrap_content\" android:layout_width=\"match_parent\" android:layout_marginbottom=\"12dp\" style=\"@android:attr/progressBarStyleHorizontal\" android:max=\"100\" android:progress=\"50\" android:secondaryprogress=\"70\"></progressbar>\n\n        <seekbar android:layout_height=\"wrap_content\" android:layout_width=\"match_parent\" android:layout_marginbottom=\"12dp\"></seekbar>\n\n        <ratingbar android:layout_height=\"wrap_content\" android:layout_width=\"wrap_content\" android:layout_marginbottom=\"12dp\"></ratingbar>\n\n    </linearlayout>\n</scrollview>",
        "sample_button": "<scrollview>\n    <linearlayout android:orientation=\"vertical\" android:gravity=\"center\">\n        <button android:layout_width=\"wrap_content\">\n            Button\n        </button>\n        <button android:layout_width=\"wrap_content\" android:enabled=\"false\">\n            DisableButton\n        </button>\n        <button id=\"btn_click\">\n            ButtonClick\n        </button>\n        <button android:layout_width=\"wrap_content\" onclick=\"this.setText('Click:'+new Date().getTime());\">\n            ButtonClick2\n        </button>\n        <button id=\"btn_long_click\">\n            ButtonLongClick\n        </button>\n        <button android:style=\"@style/btn_custom1\">\n            ButtonStyled\n        </button>\n        <button android:style=\"@style/btn_custom1\" android:enabled=\"false\">\n            ButtonStyledDisable\n        </button>\n        <button android:padding=\"8dp\" android:layout_margin=\"6dp\" android:textcolor=\"@color/white\" android:cornerradius=\"4dp\" android:background=\"#f00\" android:state_pressed=\"@style/btn_custom1/pressed\">\n            ButtonStyled2\n        </button>\n        <button android:padding=\"8dp\" android:layout_margin=\"6dp\" android:textcolor=\"@color/white\" android:cornerradius=\"4dp\" android:background=\"#f00\" android:state_pressed=\"alpha:0.2;scaleX:0.8;\" android:state_focused=\"translationY:-10dp;\">\n            ButtonStyled3\n        </button>\n    </linearlayout>\n</scrollview>",
        "sample_contacte": "<linearlayout android:orientation=\"vertical\">\n    <button id=\"open_activity_intent\">\n        startActivity with intent\n    </button>\n    <button id=\"open_activity_result\">\n        startActivity with result\n    </button>\n    <scrollview>\n        <linearlayout android:orientation=\"vertical\">\n            <textview id=\"console_tv\" android:gravity=\"center\">\n            </textview>\n        </linearlayout>\n    </scrollview>\n</linearlayout>",
        "sample_drawerlayout": "<android.support.v4.widget.drawerlayout>\n    <linearlayout android:orientation=\"vertical\" android:gravity=\"center\" android:layout_height=\"match_parent\" android:layout_width=\"match_parent\">\n        <button onclick=\"this.getParent().getParent().openDrawer(android.view.Gravity.LEFT);\" android:layout_height=\"wrap_content\" android:layout_width=\"wrap_content\">Open left drawer</button>\n        <button onclick=\"this.getParent().getParent().openDrawer(android.view.Gravity.RIGHT);\" android:layout_height=\"wrap_content\" android:layout_width=\"wrap_content\">Open right drawer</button>\n    </linearlayout>\n    <linearlayout android:layout_gravity=\"left\" android:background=\"white\" android:clickable=\"true\" android:layout_height=\"match_parent\" android:layout_width=\"220dp\">\n        <textview android:layout_height=\"match_parent\" android:layout_width=\"match_parent\" android:gravity=\"center\">Left drawer</textview>\n    </linearlayout>\n    <linearlayout android:layout_gravity=\"right\" android:background=\"white\" android:clickable=\"true\" android:layout_height=\"match_parent\" android:layout_width=\"220dp\">\n        <textview android:layout_height=\"match_parent\" android:layout_width=\"match_parent\" android:gravity=\"center\">Right drawer</textview>\n    </linearlayout>\n</android.support.v4.widget.drawerlayout>",
        "sample_edittext": "<scrollview>\n    <linearlayout android:orientation=\"vertical\">\n        <view android:style=\"@style/line_spit\"></view>\n        <edittext android:hint=\"Place Input\" android:style=\"@style/editStyle\"></edittext>\n        <view android:style=\"@style/line_spit\"></view>\n        <edittext android:hint=\"Input Type: textUri\" android:inputtype=\"textUri\" android:style=\"@style/editStyle\"></edittext>\n        <view android:style=\"@style/line_spit\"></view>\n        <edittext android:hint=\"Input Type: textEmailAddress\" android:inputtype=\"textEmailAddress\" android:style=\"@style/editStyle\"></edittext>\n        <view android:style=\"@style/line_spit\"></view>\n        <edittext android:hint=\"Input Type: textPassword\" android:inputtype=\"textPassword\" android:style=\"@style/editStyle\"></edittext>\n        <view android:style=\"@style/line_spit\"></view>\n        <edittext android:hint=\"Input Type: number\" android:inputtype=\"number\" android:style=\"@style/editStyle\"></edittext>\n        <view android:style=\"@style/line_spit\"></view>\n        <edittext android:hint=\"Input Type: numberPassword\" android:inputtype=\"numberPassword\" android:style=\"@style/editStyle\"></edittext>\n        <view android:style=\"@style/line_spit\"></view>\n        <edittext android:hint=\"Input Type: phone\" android:inputtype=\"phone\" android:style=\"@style/editStyle\"></edittext>\n        <view android:style=\"@style/line_spit\"></view>\n        <edittext android:hint=\"maxLength11\" android:maxlength=\"11\" android:inputtype=\"phone\" android:style=\"@style/editStyle\"></edittext>\n        <view android:style=\"@style/line_spit\"></view>\n        <edittext android:maxlines=\"2\" android:padding=\"10dp\" android:text=\"maxLines=2\nmaxLines=2\nmaxLines=2\nmaxLines=2\" android:style=\"@style/editStyle\"></edittext>\n        <view android:style=\"@style/line_spit\"></view>\n        <edittext android:minlines=\"2\" android:layout_width=\"match_parent\" android:gravity=\"center\" android:text=\"minLines=2\" android:style=\"@style/editStyle\"></edittext>\n        <view android:style=\"@style/line_spit\"></view>\n        <edittext android:layout_height=\"100dp\" android:layout_width=\"match_parent\" android:text=\"static height\" android:style=\"@style/editStyle\"></edittext>\n        <view android:style=\"@style/line_spit\"></view>\n        <edittext android:layout_height=\"wrap_content\" android:layout_width=\"wrap_content\" android:gravity=\"center\" android:drawablepadding=\"12dp\" android:drawableleft=\"url(assets/images/logo_android_1@2x.png)\" android:drawabletop=\"url(assets/images/logo_android_1@2x.png)\" android:drawableright=\"url(assets/images/logo_android_1@2x.png)\" android:drawablebottom=\"url(assets/images/logo_android_1@2x.png)\" android:text=\"Image around EditText\" android:style=\"@style/editStyle\"></edittext>\n    </linearlayout>\n</scrollview>",
        "sample_expand_listview_item": "<framelayout id=\"item_child_layout\" android:layout_width=\"match_parent\" android:padding=\"12dp\">\n    <textview id=\"item_child_text\" android:padding=\"12dp\" android:layout_width=\"wrap_content\" android:layout_height=\"wrap_content\" android:background=\"#55000000\" android:textcolor=\"white\" android:layout_gravity=\"center\">\n    </textview>\n</framelayout>",
        "sample_framelayout": "<framelayout>\n\n    <textview android:text=\"Text\" android:layout_gravity=\"left|top\" android:style=\"@style/textStyle\"></textview>\n    <textview android:text=\"Text\" android:layout_gravity=\"right|top\" android:style=\"@style/textStyle\"></textview>\n    <textview android:text=\"Text\" android:layout_gravity=\"bottom|right\" android:style=\"@style/textStyle\"></textview>\n    <textview android:text=\"Text\" android:layout_gravity=\"bottom|left\" android:style=\"@style/textStyle\"></textview>\n    <textview android:text=\"Text\" android:layout_gravity=\"center\" android:style=\"@style/textStyle\"></textview>\n    <textview android:text=\"Text\" android:layout_gravity=\"left|center_vertical\" android:style=\"@style/textStyle\"></textview>\n    <textview android:text=\"Text\" android:layout_gravity=\"right|center_vertical\" android:style=\"@style/textStyle\"></textview>\n    <textview android:text=\"Text\" android:layout_gravity=\"top|center_horizontal\" android:style=\"@style/textStyle\"></textview>\n    <textview android:text=\"Text\" android:layout_gravity=\"bottom|center_horizontal\" android:style=\"@style/textStyle\"></textview>\n    <textview android:text=\"Text MarginBottom50\" android:layout_marginbottom=\"50dp\" android:layout_gravity=\"center\" android:style=\"@style/textStyle\"></textview>\n</framelayout>",
        "sample_gridview": "<framelayout>\n    <gridview id=\"gridView\" android:numcolumns=\"2\">\n    </gridview>\n</framelayout>",
        "sample_gridview_item": "<framelayout id=\"item_layout\" android:layout_width=\"match_parent\" android:padding=\"32dp\">\n    <textview id=\"item_text\" android:padding=\"16dp\" android:layout_width=\"wrap_content\" android:layout_height=\"wrap_content\" android:background=\"#55000000\" android:textcolor=\"white\" android:layout_gravity=\"center\">\n    </textview>\n</framelayout>",
        "sample_htmlview": "<scrollview android:fillviewport=\"true\">\n    <linearlayout android:orientation=\"vertical\">\n        <htmlview>\n            <p style=\"font-size: 24px;text-align: center\">HtmlView</p>\n        </htmlview>\n        <htmlview style=\"padding:0 20px;box-sizing: border-box;line-height: 20px;\">\n            <p>HtmlView can wrap any <span style=\"color: red;font-weight: bold;\">HTML tag</span>, render with DOM, but too many HtmlView will reduce FPS.</p>\n            <p>HtmlView above on all Android Views</p>\n        </htmlview>\n        <textview android:gravity=\"center\">This is a Android View</textview>\n        <htmlview style=\"overflow: visible;text-align: center;\">\n            <p>This is a HtmlView</p>\n        </htmlview>\n    </linearlayout>\n</scrollview>",
        "sample_imageview": "<scrollview>\n    <linearlayout android:padding=\"0 6dp\" android:orientation=\"vertical\">\n        <textview>Default(FitCenter):</textview>\n        <linearlayout>\n            <imageview android:src=\"assets/images/logo_android_1@2x.png\" android:style=\"@style/imageStyle\"></imageview>\n            <imageview android:src=\"assets/images/logo_android_1@2x.png\" android:layout_marginleft=\"4dp\" android:layout_height=\"200dp\" android:style=\"@style/imageStyle\"></imageview>\n            <imageview android:src=\"assets/images/logo_android_1@2x.png\" android:layout_width=\"match_parent\" android:layout_marginleft=\"4dp\" android:style=\"@style/imageStyle\"></imageview>\n        </linearlayout>\n        <textview>FitStart:</textview>\n        <linearlayout>\n            <imageview android:src=\"assets/images/logo_android_1@2x.png\" android:scaletype=\"fitStart\" android:layout_height=\"200dp\" android:style=\"@style/imageStyle\"></imageview>\n            <imageview android:src=\"assets/images/logo_android_1@2x.png\" android:scaletype=\"fitStart\" android:layout_width=\"match_parent\" android:layout_marginleft=\"4dp\" android:style=\"@style/imageStyle\"></imageview>\n        </linearlayout>\n        <textview>FitEnd:</textview>\n        <linearlayout>\n            <imageview android:src=\"assets/images/logo_android_1@2x.png\" android:scaletype=\"fitEnd\" android:layout_height=\"200dp\" android:style=\"@style/imageStyle\"></imageview>\n            <imageview android:src=\"assets/images/logo_android_1@2x.png\" android:scaletype=\"fitEnd\" android:layout_width=\"match_parent\" android:layout_marginleft=\"4dp\" android:style=\"@style/imageStyle\"></imageview>\n        </linearlayout>\n        <textview>FitXy:</textview>\n        <linearlayout>\n            <imageview android:src=\"assets/images/logo_android_1@2x.png\" android:scaletype=\"fitXy\" android:layout_height=\"200dp\" android:style=\"@style/imageStyle\"></imageview>\n            <imageview android:src=\"assets/images/logo_android_1@2x.png\" android:scaletype=\"fitXy\" android:layout_width=\"match_parent\" android:layout_marginleft=\"4dp\" android:style=\"@style/imageStyle\"></imageview>\n        </linearlayout>\n        <textview>Center:</textview>\n        <linearlayout>\n            <imageview android:src=\"assets/images/logo_android_1@2x.png\" android:scaletype=\"center\" android:layout_height=\"80dp\" android:layout_width=\"80dp\" android:style=\"@style/imageStyle\"></imageview>\n            <imageview android:src=\"assets/images/logo_android_1@2x.png\" android:scaletype=\"center\" android:layout_height=\"180dp\" android:layout_width=\"180dp\" android:layout_marginleft=\"4dp\" android:style=\"@style/imageStyle\"></imageview>\n        </linearlayout>\n        <textview>centerCrop:</textview>\n        <linearlayout>\n            <imageview android:src=\"assets/images/logo_android_1@2x.png\" android:scaletype=\"centerCrop\" android:layout_height=\"80dp\" android:layout_width=\"80dp\" android:style=\"@style/imageStyle\"></imageview>\n            <imageview android:src=\"assets/images/logo_android_1@2x.png\" android:scaletype=\"centerCrop\" android:layout_marginleft=\"4dp\" android:layout_height=\"100dp\" android:layout_width=\"60dp\" android:style=\"@style/imageStyle\"></imageview>\n            <imageview android:src=\"assets/images/logo_android_1@2x.png\" android:scaletype=\"centerCrop\" android:layout_height=\"60dp\" android:layout_width=\"100dp\" android:layout_marginleft=\"4dp\" android:style=\"@style/imageStyle\"></imageview>\n        </linearlayout>\n        <textview>centerInside:</textview>\n        <linearlayout>\n            <imageview android:src=\"assets/images/logo_android_1@2x.png\" android:scaletype=\"centerInside\" android:layout_height=\"80dp\" android:layout_width=\"80dp\" android:style=\"@style/imageStyle\"></imageview>\n            <imageview android:src=\"assets/images/logo_android_1@2x.png\" android:scaletype=\"centerInside\" android:layout_height=\"180dp\" android:layout_width=\"180dp\" android:layout_marginleft=\"4dp\" android:style=\"@style/imageStyle\"></imageview>\n        </linearlayout>\n\n        <textview>Background:</textview>\n        <framelayout android:style=\"@style/imageStyle\" android:background=\"url(assets/images/logo_android_1@2x.png)\"></framelayout>\n\n    </linearlayout>\n</scrollview>",
        "sample_life_callback": "<linearlayout android:orientation=\"vertical\">\n    <button id=\"open_activity_normal\">\n        Open Normal Activity\n    </button>\n    <button id=\"open_activity_float\">\n        Open Floating Activity\n    </button>\n    <scrollview>\n        <linearlayout android:orientation=\"vertical\">\n            <textview id=\"console_tv\" android:gravity=\"center\">\n            </textview>\n        </linearlayout>\n    </scrollview>\n</linearlayout>",
        "sample_linearlayout": "<linearlayout android:gravity=\"center_vertical\" android:orientation=\"vertical\">\n\n    <linearlayout android:orientation=\"vertical\">\n        <textview android:text=\"Vertical\" android:style=\"@style/textStyle\"></textview>\n        <textview android:text=\"Vertical\" android:style=\"@style/textStyle\"></textview>\n\n    </linearlayout>\n    <linearlayout android:layout_margintop=\"12dp\" android:gravity=\"center\" android:orientation=\"vertical\">\n        <textview android:text=\"Vertical-Center\" android:style=\"@style/textStyle\"></textview>\n        <textview android:text=\"Vertical-Center\" android:style=\"@style/textStyle\"></textview>\n\n    </linearlayout>\n\n    <linearlayout android:layout_margintop=\"12dp\" android:orientation=\"horizontal\">\n        <textview android:text=\"horizontal\" android:style=\"@style/textStyle\"></textview>\n        <textview android:text=\"linear\" android:style=\"@style/textStyle\"></textview>\n        <textview android:text=\"layout\" android:style=\"@style/textStyle\"></textview>\n\n    </linearlayout>\n    <linearlayout android:layout_margintop=\"12dp\" android:gravity=\"center\" android:orientation=\"horizontal\">\n        <textview android:text=\"horizontal\" android:style=\"@style/textStyle\"></textview>\n        <textview android:text=\"linear\" android:style=\"@style/textStyle\"></textview>\n        <textview android:text=\"layout\" android:style=\"@style/textStyle\"></textview>\n        <textview android:text=\"-center\" android:style=\"@style/textStyle\"></textview>\n\n    </linearlayout>\n    <linearlayout android:layout_margintop=\"12dp\" android:gravity=\"right\" android:orientation=\"horizontal\">\n        <textview android:text=\"horizontal\" android:style=\"@style/textStyle\"></textview>\n        <textview android:text=\"linear\" android:style=\"@style/textStyle\"></textview>\n        <textview android:text=\"layout\" android:style=\"@style/textStyle\"></textview>\n        <textview android:text=\"-right\" android:style=\"@style/textStyle\"></textview>\n\n    </linearlayout>\n\n    <textview android:layout_margintop=\"12dp\" android:gravity=\"center\" android:text=\"more usage see Android's document\"></textview>\n\n</linearlayout>",
        "sample_listview": "<framelayout>\n    <listview id=\"listView\">\n    </listview>\n</framelayout>",
        "sample_listview_item": "<framelayout id=\"item_layout\" android:layout_width=\"match_parent\" android:padding=\"32dp\">\n    <textview id=\"item_text\" android:padding=\"16dp\" android:layout_width=\"wrap_content\" android:layout_height=\"wrap_content\" android:background=\"#55000000\" android:textcolor=\"white\" android:layout_gravity=\"center\">\n    </textview>\n</framelayout>",
        "sample_picker": "<linearlayout android:orientation=\"vertical\" android:gravity=\"center\">\n    <numberpicker id=\"picker\" android:layout_height=\"280dp\" android:itemcount=\"5\" android:minvalue=\"1\" android:maxvalue=\"9\">\n        <androidui.widget.htmldatapickeradapter>\n            <item>1</item>\n            <item>2</item>\n            <item>3</item>\n            <item>4</item>\n            <item>5</item>\n            <item>6</item>\n            <item>7</item>\n            <item>8</item>\n            <item>9</item>\n        </androidui.widget.htmldatapickeradapter>\n    </numberpicker>\n</linearlayout>",
        "sample_pullrefreshload": "<androidui.widget.pullrefreshloadlayout id=\"prll\" android:layout_width=\"match_parent\" android:layout_height=\"match_parent\">\n    <listview id=\"listView\">\n    </listview>\n</androidui.widget.pullrefreshloadlayout>",
        "sample_pullrefreshload_item": "<framelayout id=\"item_layout\" android:layout_width=\"match_parent\" android:padding=\"32dp\">\n    <textview id=\"item_text\" android:padding=\"16dp\" android:layout_width=\"wrap_content\" android:layout_height=\"wrap_content\" android:background=\"#55000000\" android:textcolor=\"white\" android:layout_gravity=\"center\">\n    </textview>\n</framelayout>",
        "sample_relativelayout": "<relativelayout>\n    <textview id=\"text1\" android:style=\"@style/textStyle\" android:text=\"Left&amp;Top\"></textview>\n    <textview id=\"text2\" android:style=\"@style/textStyle\" android:text=\"Right&amp;Top\" android:layout_alignparentright=\"true\"></textview>\n    <textview id=\"text3\" android:style=\"@style/textStyle\" android:text=\"Left&amp;Bottom\" android:layout_alignparentbottom=\"true\"></textview>\n    <textview id=\"text4\" android:style=\"@style/textStyle\" android:text=\"Right&amp;Bottom\" android:layout_alignparentright=\"true\" android:layout_alignparentbottom=\"true\"></textview>\n    <textview id=\"text5\" android:style=\"@style/textStyle\" android:text=\"VerticalCenter\" android:layout_centervertical=\"true\"></textview>\n    <textview id=\"text6\" android:style=\"@style/textStyle\" android:text=\"HorizontalCenter\" android:layout_centerhorizontal=\"true\"></textview>\n    <textview id=\"text7\" android:style=\"@style/textStyle\" android:text=\"Center\" android:layout_centerinparent=\"true\"></textview>\n\n    <textview android:style=\"@style/textStyle\" android:text=\"below\" android:layout_margintop=\"4dp\" android:layout_below=\"text1\"></textview>\n\n    <textview android:style=\"@style/textStyle\" android:text=\"toRightOf\" android:layout_marginleft=\"4dp\" android:layout_torightof=\"text3\" android:layout_alignparentbottom=\"true\"></textview>\n    <textview android:style=\"@style/textStyle\" android:text=\"above\" android:layout_marginbottom=\"4dp\" android:layout_above=\"text3\"></textview>\n    <textview android:style=\"@style/textStyle\" android:text=\"toLeftOf\" android:layout_marginright=\"4dp\" android:layout_toleftof=\"text4\" android:layout_alignparentbottom=\"true\"></textview>\n\n    <textview id=\"alignLeft\" android:style=\"@style/textStyle\" android:text=\"  alignLeft  \" android:layout_margintop=\"4dp\" android:layout_alignleft=\"text6\" android:layout_below=\"text2\"></textview>\n    <textview android:style=\"@style/textStyle\" android:text=\"  alignRight  \" android:layout_margintop=\"4dp\" android:layout_alignright=\"text6\" android:layout_below=\"alignLeft\"></textview>\n    <textview id=\"alignTop\" android:style=\"@style/textStyle\" android:text=\"alignTop\" android:maxwidth=\"46dp\" android:layout_marginleft=\"4dp\" android:layout_aligntop=\"text7\" android:layout_torightof=\"text7\"></textview>\n    <textview android:style=\"@style/textStyle\" android:text=\"alignBottom\" android:maxwidth=\"52dp\" android:layout_marginleft=\"4dp\" android:layout_alignbottom=\"text7\" android:layout_torightof=\"alignTop\"></textview>\n    <textview android:style=\"@style/textStyle\" android:text=\"above&amp;toLeftOf\" android:layout_above=\"text7\" android:layout_toleftof=\"text7\"></textview>\n    <textview android:style=\"@style/textStyle\" android:text=\"toRightOf &amp; toLeftOf &amp; below\" android:layout_below=\"text7\" android:layout_toleftof=\"text7\" android:layout_torightof=\"text5\"></textview>\n</relativelayout>",
        "sample_textview": "<scrollview>\n    <linearlayout android:orientation=\"vertical\">\n        <view android:style=\"@style/line_spit\"></view>\n        <textview android:text=\"Text\" android:style=\"@style/textStyle\"></textview>\n        <view android:style=\"@style/line_spit\"></view>\n        <textview android:padding=\"10dp\" android:text=\"Text Padding10\" android:style=\"@style/textStyle\"></textview>\n        <view android:style=\"@style/line_spit\"></view>\n        <textview android:padding=\"10dp\" android:text=\"Line1\nLine2\nLine3\nLine4\" android:style=\"@style/textStyle\"></textview>\n        <view android:style=\"@style/line_spit\"></view>\n        <textview android:maxlines=\"2\" android:ellipsize=\"END\" android:padding=\"10dp\" android:text=\"maxLines=2\nmaxLines=2\nmaxLines=2\nmaxLines=2\" android:style=\"@style/textStyle\"></textview>\n        <view android:style=\"@style/line_spit\"></view>\n        <textview android:layout_width=\"match_parent\" android:padding=\"10dp\" android:gravity=\"center\" android:text=\"Text Center\" android:style=\"@style/textStyle\"></textview>\n        <view android:style=\"@style/line_spit\"></view>\n        <textview android:minlines=\"2\" android:layout_width=\"match_parent\" android:padding=\"10dp\" android:gravity=\"center\" android:text=\"Text minLines=2\" android:style=\"@style/textStyle\"></textview>\n        <view android:style=\"@style/line_spit\"></view>\n        <textview android:layout_width=\"match_parent\" android:padding=\"10dp\" android:gravity=\"right\" android:text=\"Text Right\" android:style=\"@style/textStyle\"></textview>\n        <view android:style=\"@style/line_spit\"></view>\n        <textview android:layout_height=\"100dp\" android:layout_width=\"match_parent\" android:padding=\"10dp\" android:gravity=\"center\" android:text=\"Text Center\" android:style=\"@style/textStyle\"></textview>\n        <view android:style=\"@style/line_spit\"></view>\n        <textview android:layout_height=\"100dp\" android:layout_width=\"match_parent\" android:padding=\"10dp\" android:gravity=\"bottom\" android:text=\"Text Bottom\" android:style=\"@style/textStyle\"></textview>\n        <view android:style=\"@style/line_spit\"></view>\n        <textview android:layout_height=\"100dp\" android:layout_width=\"match_parent\" android:padding=\"10dp\" android:gravity=\"center_vertical\" android:text=\"Text center vertical\" android:style=\"@style/textStyle\"></textview>\n        <view android:style=\"@style/line_spit\"></view>\n        <textview android:layout_height=\"100dp\" android:layout_width=\"match_parent\" android:padding=\"10dp\" android:gravity=\"center_horizontal\" android:text=\"Text center horizontal\" android:style=\"@style/textStyle\"></textview>\n        <view android:style=\"@style/line_spit\"></view>\n        <textview android:layout_height=\"100dp\" android:layout_width=\"match_parent\" android:padding=\"10dp\" android:gravity=\"right|bottom\" android:text=\"Text right&amp;bottom\" android:style=\"@style/textStyle\"></textview>\n        <view android:style=\"@style/line_spit\"></view>\n        <textview android:layout_height=\"wrap_content\" android:layout_width=\"wrap_content\" android:padding=\"10dp\" android:gravity=\"center\" android:drawablepadding=\"12dp\" android:drawableleft=\"url(assets/images/logo_android_1@2x.png)\" android:drawabletop=\"url(assets/images/logo_android_1@2x.png)\" android:drawableright=\"url(assets/images/logo_android_1@2x.png)\" android:drawablebottom=\"url(assets/images/logo_android_1@2x.png)\" android:text=\"Image around text\" android:style=\"@style/textStyle\"></textview>\n    </linearlayout>\n</scrollview>",
        "sample_viewpager": "<framelayout>\n    <android.support.v4.view.viewpager id=\"viewPager\">\n    </android.support.v4.view.viewpager>\n</framelayout>",
        "sample_viewpager_gallery": "<framelayout>\n    <android.support.v4.view.viewpager android:background=\"#88000000\">\n        <androidui.widget.htmldatapageradapter>\n            <uk.co.senab.photoview.photoview android:src=\"assets/images/logo_android_3.png\">\n            </uk.co.senab.photoview.photoview>\n            <uk.co.senab.photoview.photoview android:src=\"assets/images/logo_android_2.png\">\n            </uk.co.senab.photoview.photoview>\n            <uk.co.senab.photoview.photoview android:src=\"assets/images/logo_google_1.jpg\">\n            </uk.co.senab.photoview.photoview>\n            <uk.co.senab.photoview.photoview android:src=\"assets/images/logo_google_2.png\">\n            </uk.co.senab.photoview.photoview>\n        </androidui.widget.htmldatapageradapter>\n    </android.support.v4.view.viewpager>\n    <linearlayout android:padding=\"4dp 12dp\" android:layout_gravity=\"bottom\" android:layout_height=\"wrap_content\" android:background=\"#55000000\">\n        <textview android:textcolor=\"white\">\n            Support gesture event, from\n        </textview>\n        <textview android:textcolor=\"#FF0000cc\" android:padding=\"4dp\" android:state_pressed=\"background:#66ffffff\" onclick=\"location.href = 'https://github.com/chrisbanes/PhotoView'\">\n            PhotoView\n        </textview>\n    </linearlayout>\n</framelayout>",
        "sample_viewpager_page": "<framelayout id=\"page_bg\">\n    <textview id=\"page_text\" android:padding=\"12dp\" android:layout_width=\"wrap_content\" android:layout_height=\"wrap_content\" android:background=\"#55000000\" android:textcolor=\"white\" android:layout_gravity=\"center\">\n    </textview>\n</framelayout>"
};
    const _tempDiv = document.createElement('div');

    export class layout{
        static getLayoutData(layoutRef:string):HTMLElement{
            if(!layoutRef) return null;
            layoutRef = layoutRef.replace('/', '.').split('.').pop();
            if(!_layout_data[layoutRef]) return null;
            _tempDiv.innerHTML = _layout_data[layoutRef];
            let data = <HTMLElement>_tempDiv.firstElementChild;
            _tempDiv.removeChild(data);
            return data;
        }
        
        static sample_animation = '@layout/sample_animation';
        static sample_base_widget = '@layout/sample_base_widget';
        static sample_button = '@layout/sample_button';
        static sample_contacte = '@layout/sample_contacte';
        static sample_drawerlayout = '@layout/sample_drawerlayout';
        static sample_edittext = '@layout/sample_edittext';
        static sample_expand_listview_item = '@layout/sample_expand_listview_item';
        static sample_framelayout = '@layout/sample_framelayout';
        static sample_gridview = '@layout/sample_gridview';
        static sample_gridview_item = '@layout/sample_gridview_item';
        static sample_htmlview = '@layout/sample_htmlview';
        static sample_imageview = '@layout/sample_imageview';
        static sample_life_callback = '@layout/sample_life_callback';
        static sample_linearlayout = '@layout/sample_linearlayout';
        static sample_listview = '@layout/sample_listview';
        static sample_listview_item = '@layout/sample_listview_item';
        static sample_picker = '@layout/sample_picker';
        static sample_pullrefreshload = '@layout/sample_pullrefreshload';
        static sample_pullrefreshload_item = '@layout/sample_pullrefreshload_item';
        static sample_relativelayout = '@layout/sample_relativelayout';
        static sample_textview = '@layout/sample_textview';
        static sample_viewpager = '@layout/sample_viewpager';
        static sample_viewpager_gallery = '@layout/sample_viewpager_gallery';
        static sample_viewpager_page = '@layout/sample_viewpager_page';
    }
    android.content.res.Resources.buildLayoutFinder = (refString:string)=>{
        return layout.getLayoutData(refString)
    }
}