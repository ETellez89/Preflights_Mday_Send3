import { useState, useEffect, useCallback, useRef } from "react";

// ═══════════════════════════════════════════════════════════════════════════════
//  📧 TEMPLATE HTML — Actualiza esto cada campaña
// ═══════════════════════════════════════════════════════════════════════════════

const TEMPLATE_HTML = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html style="padding:0;margin:0;opacity:1;" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="x-apple-disable-message-reformatting">
<meta name="format-detection" content="telephone=no,address=no,email=no,date=no">
<title>Groupon Merchant</title>
<!--[if gte mso 9]><xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml><![endif]-->
<style type="text/css">
html { -webkit-text-size-adjust: none; }
body { margin: 0 !important; padding: 0 !important; -webkit-text-size-adjust: 100% !important; -ms-text-size-adjust: 100% !important; -webkit-font-smoothing: antialiased !important; }
img { border: 0 !important; outline: none !important; }
p { margin: 0px !important; padding: 0px !important; }
table { border-collapse: collapse; mso-table-lspace: 0px; mso-table-rspace: 0px; }
td, a, span { border-collapse: collapse; mso-line-height-rule: exactly; }
div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
@font-face { font-family: 'DM Serif Display'; font-style: normal; src: url(https://www2.grouponcdn.com/layout/assets/DMSerifDisplay-Regular-8441fd9f34.woff2) format("woff2"); }
@font-face { font-family: 'Open Sans'; font-style: normal; src: url(https://www1.grouponcdn.com/layout/assets/OpenSansRegular-409ed3007d.woff2) format("woff2"); }
.ExternalClass * { line-height: 100%; }
.imghide { max-height: 0px; font-size: 0; display: none; overflow: hidden; }
.mobile_show { max-height: 0px; font-size: 0; display: none; overflow: hidden; visibility: hidden; width: 0; }
</style>
<style type="text/css">
@media only screen and (max-width: 480px) {
  div, span { -webkit-text-size-adjust: none; text-size-adjust: none; }
  .em_main_table { width: 100% !important; }
  .em_wrapper { width: 100% !important; }
  u + .em_body .em_full_wrap { width: 100% !important; width: 100vw !important; }
  div[class=em_hide_desktop] { display: table !important; float: none !important; width: 100% !important; overflow: visible !important; height: auto !important; }
  .imghide { max-height: none !important; font-size: 12px !important; display: block !important; overflow: visible !important; }
  .em_img { width: 100% !important; height: auto !important; }
  .em_hide { display: none !important; }
  .heightAuto { height: auto !important; }
  .mobile_hide { display: none !important; visibility: hidden !important; height: 0 !important; width: 0 !important; }
  .mobile_show { display: block !important; margin: 0 !important; padding: 0 !important; overflow: visible !important; width: 100% !important; max-height: inherit !important; visibility: visible !important; }
  .mobileImgShow { display:block !important; width:100% !important; height:auto !important; }
  .wrap { display: block !important; }
  .width100 { width: 100% !important; }
  .w75 { width: 75px !important; }
  .width50 { width: 50% !important; }
  .center { text-align: center !important; }
  .centercenter { margin-left: auto !important; margin-right: auto !important; padding: 0px !important; }
  .padNone { padding: 0px !important; }
  .pad0center { padding-left: 0px !important; padding-right: 0px !important; }
  .pad15center { padding-left: 15px !important; padding-right: 15px !important; }
  .pad20center { padding-left: 20px !important; padding-right: 20px !important; }
  .pad30center { padding-left: 30px !important; padding-right: 30px !important; }
  .topPad0 { padding-top: 0px !important; }
  .topPad10 { padding-top: 10px !important; }
  .topPad15 { padding-top: 15px !important; }
  .topPad20 { padding-top: 20px !important; }
  .bottomPad0 { padding-bottom: 0px !important; }
  .bottomPad10 { padding-bottom: 10px !important; }
  .bottomPad15 { padding-bottom: 15px !important; }
  .bottomPad20 { padding-bottom: 20px !important; }
  .h15 { height: 15px !important; }
  .font16up { font-size: 18px !important; line-height: 24px !important; }
  .font20 { font-size: 20px !important; line-height: 24px !important; }
}
</style>
<script runat="server" language="ampscript">
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptUTM", "emTemplate", "IMC"))
ContentBlockByID(Lookup("MASTER_CONTENT", "emTemplateScriptGeoAndLinks", "emTemplate", "IMC"))
</script>
</head>
<body class="em_body" style="margin:0;padding:0;word-spacing:normal;background-color:#ffffff;">
<div role="article" aria-roledescription="email" style="-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;background-color:#ffffff;">
<table bgcolor="#ffffff" border="0" cellpadding="0" cellspacing="0" class="em_full_wrap" width="100%"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_main_table" style="width:600px; table-layout:fixed;" width="600"><tr><td align="center" valign="top">
<table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600"><tr><td align="center" valign="top">

<!-- HEADER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateHeader","emTemplate","IMC"))=%%
<!-- / HEADER -->

<!-- MAIN BODY CONTAINER -->
<table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:0px; padding-bottom:15px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-HBW-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-HBW-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-FD-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-FD-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-TTD-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-TTD-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-desktop_600x300-Services-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/MDAY2026-Header-mobile_480x200-Services-send1-ENG.png" alt="Offer the Perfect Gift: A Mother’s Day Groupon!" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:9px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">


Mother’s Day is coming on May 10 — and shoppers start browsing early. Create a giftable Groupon now so customers can send an instant gift, and you can unlock added exposure during Mother’s Day promotions.

<br><br>
  
%%[ if MERCHANT_TYPE == "New" then ]%% 
  
  Launch your first Groupon with a gift-ready offer so you’re eligible for seasonal gifting visibility as demand builds. 
  
  %%[ elseif MERCHANT_TYPE == "Inactive" then ]%% 
  
  Rejoin with a giftable offer—Mother’s Day is a high-intent moment to restart sales and visibility on Groupon. 
  
  %%[ else ]%% 
  
 You’re already live — add a premium option or a giftable add-on to boost clicks and revenue per voucher. 
  
  %%[ endif ]%%

  
 
  
</div>
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then
set @cbrShows = "true"
]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Book time with your Account Manager

</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Review and optimise your live deal

</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Build or Edit your Mother's Day Campaign

</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Build or Edit your Mother's Day Campaign

</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[
var @rows, @rowCount
if CATEGORY_V3 == "Beauty / Wellness / Healthcare" or CATEGORY_V3 == "Food & Drink" or CATEGORY_V3 == "Leisure Offers / Activities" then
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", CATEGORY_V3, "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
else
  set @rows = LookupRows("IMC_MothersDay2026_TopDeals", "CATEGORY_V3", "SERVICES/H&A/General", "templateGeoLang", @templateGeoLang)
  set @rowCount = RowCount(@rows)
endif
]%%
%%[ if @rowCount > 0 then ]%%

<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15x; font-size:16px; line-height:24px;"><div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">
  
Here are some top-performing examples from a similar businesses on Groupon, to help inspire your own Mother's Day offer:  
<br>

<ul style="margin:0px; padding-left:25px;">

%%[
var @fila, @MERCHANT, @DEAL_URL, @UNITS_SOLD
for @i = 1 to @rowCount do
  set @fila = Row(@rows, @i)
  set @MERCHANT = Field(@fila, "ACCOUNT_NAME")
  set @DEAL_URL = Field(@fila, "DEAL_URL")
  set @UNITS_SOLD = Field(@fila, "UNITS_SOLD")
]%%

<li style="padding-top:9px;">
  <strong><a href="%%=RedirectTo(v(@DEAL_URL))=%%" style="color:#008A22; text-decoration:none; font-weight:bold;">%%=v(@MERCHANT)=%%</a></strong> - Sold %%=v(@UNITS_SOLD)=%% vouchers.
</li>

%%[ next @i ]%%
</ul>

</div>
</td></tr></table>

%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table align="center" border="0" cellpadding="0" cellspacing="0" class="em_wrapper" style="width:600px;" width="600">
<tr><td align="center" valign="top" style="padding-top:20px; padding-bottom:20px;">


%%[ if CATEGORY_V3 == "Beauty / Wellness / Healthcare" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x260-MD2026-quick+win+tips+banner+HBW.png" alt="Quick Win Tips" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x260-MD2026-quick+win+tips+banner+HBW.png" alt="Quick Win Tips" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Food & Drink" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x260-MD2026-quick+win+tips+banner+FD.png" alt="Quick Win Tips" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x260-MD2026-quick+wins+banner+FD.png" alt="Quick Win Tips" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ elseif CATEGORY_V3 == "Leisure Offers / Activities" then ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x260-MD2026-quick+win+tips+banner+TTD.png" alt="Quick Win Tips" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width -->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x260-MD2026-quick+win+tips+banner+TTD.png" alt="Quick Win Tips" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->


%%[ else ]%%

<!-- DESKTOP IMAGE 600 px width -->
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/600x260-MD2026-quick+win+tips+banner+Else.png" alt="Quick Win Tips" border="0" class="em_img em_hide" style="display:block; border-radius:10px;" width="600"><!--[if !mso]><!-->

<!-- MOBILE IMAGE 480px width-->
<div class="imghide" style="max-height:0px; font-size:0; display:none; overflow:hidden;">
<img src="https://image.mc.groupon.com/lib/fe3e157075640475711070/m/1/480x275-MD2026-quick+win+tips+banner+Else.png" alt="Quick Win Tips" border="0" class="imghide em_img em_center" height="0" width="0" style="border-radius:10px;"></div><!--<![endif]-->

%%[ endif ]%%
</td></tr></table></td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner">%%[ if not empty(ACCOUNT_OWNER_NAME) and ACCOUNT_OWNER_NAME != "House Account" and IndexOf(ACCOUNT_OWNER_NAME,"Merchant") == 0 then ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;"><div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;"><table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center"><table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(@masterCBR)=%%" alias="Callback_CTA_new" style="color:#ffffff; text-decoration:none;">

Contact Your Account Manager


</a></td></tr></table></td></tr></table></div></td></tr></table>
%%[ else ]%%
<table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="line-height:18px; padding-left:30px; padding-right:30px; padding-top:15px; padding-bottom:20px;">
<div style="display:inline-block; width:100%; word-wrap:break-word; overflow-wrap:break-word;">
<table align="center" border="0" cellpadding="0" cellspacing="0"><tr><td align="center">

%%[ if HAS_LIVE_DEAL == "True" then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenter))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_OptimizeDeal">

Optimize Your Mother’s Day Deal 

</a>
</td></tr></table>
%%[ else ]%%

%%[ if MERCHANT_PERMALINK == '' then ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantGetStarted))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Launch Your Mother’s Day Deal 

</a>
</td></tr></table>
%%[ else ]%%
<table border="0" cellpadding="20" cellspacing="0"><tr><td align="center" bgcolor="#008A22" style="font-size:18px; line-height:26px; font-weight:bold; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#ffffff; padding:12px 35px; border-radius:25px; border-style:none;">
<a href="%%=RedirectTo(v(@urlMerchantCenterBuildCampaign))=%%" style="color:#ffffff; text-decoration:none;" alias="CTA_CreateDeal">

Launch Your Mother’s Day Deal 

</a>
</td></tr></table>
%%[ 
endif
endif
]%%
</td></tr></table></div></td></tr></table>
%%[ endif ]%%</td></tr></table><table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="min-width: 100%; " class="stylingblock-content-wrapper"><tr><td class="stylingblock-content-wrapper camarker-inner"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" valign="top" style="padding-left:15px; padding-right:15px; padding-top:9px; padding-bottom:15px; font-size:16px; line-height:24px;">
<div style="text-align:left; font-size:16px; line-height:24px; font-family:'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif; color:#230F33; font-weight:normal;">

Launch early so you’re ready when Mother’s Day gifting searches spike in your market.

<br><br>  
  Best,
  <br>Your Groupon Team  
</div>
</td></tr></table></td></tr></table>
<!-- / -->

<!-- FOOTER -->
%%=ContentBlockByID(Lookup("MASTER_CONTENT","emTemplateFooter","emTemplate","IMC"))=%%
<!-- / FOOTER -->

</td></tr></table>
</td></tr></table>
</td></tr></table>
</div><custom name="opencounter" type="tracking" />
</body>
</html>`;

// ═══════════════════════════════════════════════════════════════════════════════
//  🎛 VARIABLE DEFINITIONS
// ═══════════════════════════════════════════════════════════════════════════════

const VARIABLE_DEFS = [
  {
    key: "CATEGORY_V3",
    label: "Category",
    options: [
      { value: "Beauty / Wellness / Healthcare", label: "💆 Beauty / Wellness" },
      { value: "Food & Drink",                  label: "🍽 Food & Drink" },
      { value: "Leisure Offers / Activities",   label: "🎭 Leisure / Activities" },
      { value: "Services",                      label: "🔧 Services (else)" },
    ],
  },
  {
    key: "MERCHANT_TYPE",
    label: "Merchant Type",
    options: [
      { value: "New",      label: "🆕 New" },
      { value: "Inactive", label: "😴 Inactive" },
      { value: "Existing", label: "✅ Existing (else)" },
    ],
  },
  {
    key: "ACCOUNT_OWNER_NAME",
    label: "Account Manager",
    options: [
      { value: "Jane Smith",        label: "👤 Has AM" },
      { value: "House Account",     label: "🏠 House Account" },
      { value: "Merchant Support",  label: "🚫 No AM (else)" },
    ],
  },
  {
    key: "HAS_LIVE_DEAL",
    label: "Live Deal",
    options: [
      { value: "True",  label: "🟢 Has Live Deal" },
      { value: "False", label: "🔴 No Live Deal" },
    ],
  },
  {
    key: "MERCHANT_PERMALINK",
    label: "Permalink",
    options: [
      { value: "my-deal-url", label: "🔗 Has Permalink" },
      { value: "",            label: "❌ No Permalink" },
    ],
  },
];

// Default values (first option of each variable)
const DEFAULTS = Object.fromEntries(
  VARIABLE_DEFS.map(v => [v.key, v.options[0].value])
);

// ═══════════════════════════════════════════════════════════════════════════════
//  AMPscript evaluator
// ═══════════════════════════════════════════════════════════════════════════════

function ampCondition(cond, vars) {
  cond = cond.trim();

  if (/\s+and\s+/i.test(cond))
    return cond.split(/\s+and\s+/i).every(c => ampCondition(c.trim(), vars));
  if (/\s+or\s+/i.test(cond))
    return cond.split(/\s+or\s+/i).some(c => ampCondition(c.trim(), vars));

  let m;

  m = cond.match(/^not\s+empty\((\w+)\)$/i);
  if (m) return !!vars[m[1]] && vars[m[1]] !== "";

  m = cond.match(/^empty\((\w+)\)$/i);
  if (m) return !vars[m[1]] || vars[m[1]] === "";

  m = cond.match(/IndexOf\((\w+),\s*"([^"]*)"\)\s*==\s*0/i);
  if (m) return !String(vars[m[1]] ?? "").includes(m[2]);

  m = cond.match(/^(\w+)\s*==\s*"([^"]*)"$/i);
  if (m) return String(vars[m[1]] ?? "") === m[2];

  m = cond.match(/^(\w+)\s*!=\s*"([^"]*)"$/i);
  if (m) return String(vars[m[1]] ?? "") !== m[2];

  m = cond.match(/^(\w+)\s*==\s*(?:''|"")$/i);
  if (m) return String(vars[m[1]] ?? "") === "";

  m = cond.match(/^(\w+)\s*!=\s*(?:''|"")$/i);
  if (m) return String(vars[m[1]] ?? "") !== "";

  return false;
}

function stripSetStatements(condAndBody) {
  return condAndBody.replace(/\bset\s+@\w+\s*=\s*(?:"[^"]*"|'[^']*'|\S+)/gi, "").trim();
}

function processIfBlocks(html, vars) {
  // 1. Normalizar múltiples "endif" juntos (ej. %%[ endif \n endif ]%%)
  let str = html.replace(/%%\[(?:\s*endif\s*)+\]%%/gi, match => {
    const count = (match.match(/endif/gi) || []).length;
    return "%%[ endif ]%%\n".repeat(count);
  });

  // 2. Tokenizar todo el código AMPscript (crear un árbol de nodos)
  const tagRegex = /%%\[\s*(if\s+[\s\S]+?|elseif\s+[\s\S]+?|else|endif)\s*\]%%/gi;
  let tokens = [];
  let lastIdx = 0;
  let match;

  while ((match = tagRegex.exec(str)) !== null) {
    if (match.index > lastIdx) {
      tokens.push({ type: 'text', val: str.slice(lastIdx, match.index) });
    }
    let content = match[1].trim();
    if (/^if\s+/i.test(content)) {
       tokens.push({ type: 'if', cond: content.replace(/^if\s+/i, '').replace(/\s+then$/i, '').trim() });
    } else if (/^elseif\s+/i.test(content)) {
       tokens.push({ type: 'elseif', cond: content.replace(/^elseif\s+/i, '').replace(/\s+then$/i, '').trim() });
    } else if (/^else$/i.test(content)) {
       tokens.push({ type: 'else' });
    } else if (/^endif$/i.test(content)) {
       tokens.push({ type: 'endif' });
    }
    lastIdx = tagRegex.lastIndex;
  }
  if (lastIdx < str.length) {
    tokens.push({ type: 'text', val: str.slice(lastIdx) });
  }

  // 3. Función recursiva para evaluar exactamente la rama correcta
  function evaluateTokens(tks) {
     let result = "";
     let i = 0;
     while (i < tks.length) {
        let t = tks[i];
        if (t.type === 'text') {
           result += t.val;
           i++;
        } else if (t.type === 'if') {
           let depth = 1;
           let blockTokens = [];
           i++;
           // Agrupar todo el bloque interno hasta su propio endif
           while (i < tks.length && depth > 0) {
              if (tks[i].type === 'if') depth++;
              else if (tks[i].type === 'endif') depth--;
              
              if (depth > 0) blockTokens.push(tks[i]);
              i++;
           }
           
           // Separar el bloque en ramas lógicas
           let branches = [];
           let currentBranch = { cond: t.cond, tokens: [] };
           let branchDepth = 0;
           
           for (let j = 0; j < blockTokens.length; j++) {
              let bt = blockTokens[j];
              if (bt.type === 'if') branchDepth++;
              else if (bt.type === 'endif') branchDepth--;
              
              if (branchDepth === 0 && bt.type === 'elseif') {
                 branches.push(currentBranch);
                 currentBranch = { cond: bt.cond, tokens: [] };
              } else if (branchDepth === 0 && bt.type === 'else') {
                 branches.push(currentBranch);
                 currentBranch = { cond: '__else__', tokens: [] };
              } else {
                 currentBranch.tokens.push(bt);
              }
           }
           branches.push(currentBranch);

           // Evaluar y quedarse solo con la primera rama que cumpla la condición
           for (let b of branches) {
              if (b.cond === '__else__' || ampCondition(b.cond, vars)) {
                 result += evaluateTokens(b.tokens); // Llama la recursividad
                 break;
              }
           }
        } else {
           i++; // Ignorar etiquetas huérfanas
        }
     }
     return result;
  }

  return evaluateTokens(tokens);
}

function evaluateAmpscript(html, vars) {
  let r = html;
  r = r.replace(/<script runat="server"[\s\S]*?<\/script>/gi, "");
  r = r.replace(/%%=ContentBlockByID\([^)]*\)=%%/g, "");
  r = r.replace(/%%=RedirectTo\([^)]*\)=%%/g, "#");
  r = r.replace(/%%=v\(@\w+\)=%%/gi, "#");
  r = r.replace(/%%=CloudPagesURL\([^)]*\)=%%/gi, "#");
  r = processIfBlocks(r, vars);
  r = r.replace(/%%\[[\s\S]*?\]%%/g, "");
  r = r.replace(/%%=[^%]*=%%/g, "");
  return r;
}

// ═══════════════════════════════════════════════════════════════════════════════
//  Build iframe HTML
// ═══════════════════════════════════════════════════════════════════════════════

function buildIframeDoc(vars) {
  const evaluated = evaluateAmpscript(TEMPLATE_HTML, vars);
  const styleMatches = [...TEMPLATE_HTML.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)];
  const styles = styleMatches.map(m => m[1]).join("\n");
  const bodyMatch = evaluated.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch ? bodyMatch[1] : evaluated;

  const heightScript = [
    "<scr" + "ipt>",
    "function reportHeight(){",
    "  var h=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);",
    "  window.parent.postMessage({type:'iframeHeight',height:h},'*');",
    "}",
    "window.addEventListener('load',reportHeight);",
    "document.querySelectorAll('img').forEach(function(i){",
    "  i.addEventListener('load',reportHeight);",
    "  i.addEventListener('error',reportHeight);",
    "});",
    "setTimeout(reportHeight,400);",
    "setTimeout(reportHeight,1200);",
    "</" + "script>",
  ].join("\n");

  // ── PREVIEWER CSS FIX ────────────────────────────────────────────────────────
  // The email structure is:
  //   em_full_wrap (width=100%) > TD (align=center) >
  //   em_main_table (width=600px fixed) > TD >
  //   content tables (width=100%) > TD (padding-left:15px, padding-right:15px)
  //
  // In a real email client, table TDs use the classic box model: padding is
  // ADDITIVE. So a TD that is 600px wide with 15px padding has 630px total
  // footprint — but email clients clip this to the 600px column.
  //
  // In a browser iframe, the same TD is 600px content + 30px padding = 630px,
  // and the inner table width=100% becomes 600px, which OVERFLOWS 30px to the right.
  //
  // Fix: apply overflow:hidden to the em_main_table's TD (the 600px column),
  // which clips everything inside to 600px, matching real email client behavior.
  const previewerCSS = [
    "html,body{margin:0 !important;padding:0 !important;background:#ffffff;}",
    "body{padding:12px 0 !important;}",
    // Clip the 600px email column — this is the key fix
    // Any content that overflows due to additive padding gets clipped, 
    // just like real email clients do.
    ".em_main_table > tbody > tr > td, .em_main_table > tr > td{overflow:hidden !important;}",
    // Also clip the em_wrapper
    ".em_wrapper > tbody > tr > td, .em_wrapper > tr > td{overflow:hidden !important;}",
    // Fix inline-block CTA wrapper divs
    "div[style*='inline-block']{display:block !important;width:100% !important;box-sizing:border-box !important;text-align:center !important;}",
    // Restore explicit left-align on text content divs
    "div[style*='text-align:left']{text-align:left !important;}",
    "div[style*='text-align: left']{text-align:left !important;}",
  ].join("\n");

  return (
    "<!DOCTYPE html>" +
    "<html><head><meta charset=\"utf-8\">" +
    "<style>" +
    previewerCSS +
    styles +
    "</style></head>" +
    "<body>" + body + heightScript + "</body>" +
    "</html>"
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  URL state helpers
// ═══════════════════════════════════════════════════════════════════════════════

function stateToParams(state) {
  const p = new URLSearchParams();
  Object.entries(state).forEach(([k, v]) => p.set(k, v));
  return p.toString();
}

function paramsToState(search) {
  const p = new URLSearchParams(search);
  const s = { ...DEFAULTS };
  VARIABLE_DEFS.forEach(({ key }) => { if (p.has(key)) s[key] = p.get(key); });
  return s;
}

// ═══════════════════════════════════════════════════════════════════════════════
//  UI components
// ═══════════════════════════════════════════════════════════════════════════════

function OptionBtn({ active, onClick, children }) {
  return (
    <button onClick={onClick} style={{
      padding: "5px 13px", borderRadius: 20, cursor: "pointer",
      border: active ? "2px solid #53D989" : "2px solid rgba(255,255,255,0.15)",
      background: active ? "#53D989" : "rgba(255,255,255,0.07)",
      color: active ? "#1d0533" : "rgba(255,255,255,0.8)",
      fontWeight: active ? 700 : 400, fontSize: 12.5, transition: "all 0.15s",
      whiteSpace: "nowrap", fontFamily: "inherit",
    }}>{children}</button>
  );
}

function Toast({ show, msg }) {
  return (
    <div style={{
      position: "fixed", bottom: 28, left: "50%",
      transform: `translateX(-50%) translateY(${show ? 0 : 70}px)`,
      background: "#1d0533", color: "#fff", padding: "10px 24px",
      borderRadius: 24, fontSize: 13, fontWeight: 600,
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)", transition: "transform 0.25s",
      zIndex: 9999, pointerEvents: "none",
    }}>{msg}</div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
//  MAIN APP
// ═══════════════════════════════════════════════════════════════════════════════

export default function App() {
  const [vars, setVars] = useState(() => paramsToState(window.location.search));
  const [toast, setToast] = useState({ show: false, msg: "" });
  const [zoom, setZoom] = useState(1);
  const [iframeHeight, setIframeHeight] = useState(900);
  const iframeRef = useRef(null);
  const wrapRef = useRef(null);

  // Sync URL
  useEffect(() => {
    window.history.replaceState(null, "", `${window.location.pathname}?${stateToParams(vars)}`);
  }, [vars]);

  // Update zoom when container resizes
  useEffect(() => {
    const update = () => {
      if (!wrapRef.current) return;
      const w = wrapRef.current.clientWidth;
      setZoom(Math.min(1, w / 600));
    };
    update();
    const ro = new ResizeObserver(update);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  // Listen for height from iframe postMessage
  useEffect(() => {
    const handler = (e) => {
      if (e.data?.type === "iframeHeight" && e.data.height > 100) {
        setIframeHeight(e.data.height + 24);
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  const handleIframeLoad = useCallback(() => {}, []);

  const setVar = useCallback((key, value) => {
    setVars(prev => ({ ...prev, [key]: value }));
  }, []);

  const showToast = (msg) => {
    setToast({ show: true, msg });
    setTimeout(() => setToast(t => ({ ...t, show: false })), 2500);
  };

  const copyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}?${stateToParams(vars)}`;
    navigator.clipboard.writeText(url).then(() => showToast("✓ Link copiado al portapapeles"));
  };

  const iframeDoc = buildIframeDoc(vars);

  return (
    <div style={{ minHeight: "100vh", background: "#13102a", fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── Sticky toolbar ── */}
      <div style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "#1d0533", boxShadow: "0 2px 20px rgba(0,0,0,0.5)",
      }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 20px" }}>

          {/* Title row */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            paddingTop: 13, paddingBottom: 11,
            borderBottom: "1px solid rgba(255,255,255,0.1)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 18 }}>📧</span>
              <span style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>AMPscript Email Previewer</span>
              <span style={{
                background: "#53D989", color: "#1d0533", fontSize: 10,
                fontWeight: 700, padding: "2px 8px", borderRadius: 10, letterSpacing: 0.3,
              }}>● LIVE</span>
            </div>
            <button onClick={copyLink} style={{
              padding: "7px 16px", borderRadius: 20, cursor: "pointer",
              background: "#53D989", color: "#1d0533", border: "none",
              fontSize: 12.5, fontWeight: 700, fontFamily: "inherit",
            }}>🔗 Compartir link</button>
          </div>

          {/* Variable controls */}
          <div style={{ padding: "11px 0 13px", display: "flex", flexDirection: "column", gap: 8 }}>
            {VARIABLE_DEFS.map(({ key, label, options }) => (
              <div key={key} style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span style={{
                  color: "rgba(255,255,255,0.45)", fontSize: 11, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: 0.8, minWidth: 145,
                }}>{label}</span>
                <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                  {options.map(opt => (
                    <OptionBtn
                      key={opt.value}
                      active={vars[key] === opt.value}
                      onClick={() => setVar(key, opt.value)}
                    >{opt.label}</OptionBtn>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Preview area ── */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "24px 20px 60px" }}>

        {/* Active state badges */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 16 }}>
          {VARIABLE_DEFS.map(({ key, label, options }) => {
            const opt = options.find(o => o.value === vars[key]);
            return (
              <span key={key} style={{
                background: "rgba(255,255,255,0.08)", borderRadius: 12,
                padding: "3px 10px", fontSize: 12, color: "rgba(255,255,255,0.6)",
              }}>
                <strong style={{ color: "#53D989" }}>{label}:</strong> {opt?.label || vars[key] || "—"}
              </span>
            );
          })}
        </div>

        {/* Width measurer */}
        <div ref={wrapRef} style={{ width: "100%" }}>
          {/* Outer clips to the visually-scaled height */}
          <div style={{
            borderRadius: 12,
            overflow: "hidden",
            boxShadow: "0 6px 40px rgba(0,0,0,0.5)",
            width: "100%",
            height: Math.round(iframeHeight * zoom),
          }}>
            {/* Inner is 600px wide, scaled down with transform */}
            <div style={{
              width: 600,
              height: iframeHeight,
              transformOrigin: "top left",
              transform: `scale(${zoom})`,
            }}>
              <iframe
                ref={iframeRef}
                srcDoc={iframeDoc}
                style={{
                  width: "100%",
                  height: iframeHeight,
                  border: "none",
                  display: "block",
                  background: "#fff",
                }}
                onLoad={handleIframeLoad}
                title="Email Preview"
                sandbox="allow-scripts allow-same-origin"
                scrolling="no"
              />
            </div>
          </div>
        </div>

        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.25)", fontSize: 12, marginTop: 14 }}>
          Preview a {Math.round(zoom * 100)}% · El render final puede variar por cliente de correo
        </p>
      </div>

      <Toast show={toast.show} msg={toast.msg} />
    </div>
  );
}
