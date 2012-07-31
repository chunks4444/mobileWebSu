Ext.application({
	name: "MyApp",
	launch: function(){
		var sheet = Ext.create("Ext.Sheet", {
			/*
			 * left: 0,
			 * right: 0,
			 * bottom: 0,
			 */
			hidden: true,
			height: 140,
			layout: {
				type:'vbox',
				align:'stretch'
			},
			items: [
				{
					html: '<div id="loginForm"' +
					'<center>'+
					'<table>'+
					'<tr>'+
					'<td style="padding: 5px;" width="100">'+
					'<font color="#ffffff">���̵�</font>'+
					'</td>' +
					'<td style="padding: 5px;">' +
					'<input id="mid" name="mid" type="text" size="10" />' +
					'</td>' +
					'</tr>' +
					'<tr>' +
					'<td style="padding: 5px;" width="100">'+
					'<font color="#ffffff">�н�����</font>'+
					'</td>' +
					'<td style="padding: 5px;">' +
					'<input id="mpassword" name="mpassword" type="password" size="10" />' +
					'</td>' +
					'</tr>' +
					'</table>' +
					'</center>' +
					'</div>' 
				},
				{ xtype: "spacer" },
				{
					layout: { type:"hbox", align:"middle", pack:"center" },
					items: [
						{
							xtype: "button", text:"�α���", ui:"decline", width: 100 
						},
						{ xtype: "spacer", width: 20},
						{ 
							xtype: "button", text:"���", ui:"decline", width:100,
							handler: function(){ sheet.hide(); }
						}
					]
				}
			]
		});
		Ext.Viewport.add(sheet);
		
		var toolbar = Ext.create("Ext.Toolbar", {
			docked:"top",
			items: [
				{
					text: "�α���",
					ui: "confirm",
					handler: function() {
						sheet.show();
					}
				}
			]
		});
		
		var rootPanel = Ext.create("Ext.Panel", {
			items: [toolbar]
		});
		Ext.Viewport.add(rootPanel);
	}
});