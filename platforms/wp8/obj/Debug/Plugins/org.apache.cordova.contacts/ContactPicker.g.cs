﻿#pragma checksum "c:\cordova\Aviva\AvivaPractice\platforms\wp8\Plugins\org.apache.cordova.contacts\ContactPicker.xaml" "{406ea660-64cf-4c82-b6f0-42d48172a799}" "8F06792E7C128CABD13292B293B22DF5"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.34209
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using Microsoft.Phone.Controls;
using System;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Automation.Peers;
using System.Windows.Automation.Provider;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Interop;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Resources;
using System.Windows.Shapes;
using System.Windows.Threading;


namespace WPCordovaClassLib.Cordova.Commands {
    
    
    public partial class ContactPicker : Microsoft.Phone.Controls.PhoneApplicationPage {
        
        internal System.Windows.Controls.Grid ContentRoot;
        
        internal System.Windows.Controls.TextBlock HeaderBlock;
        
        internal System.Windows.Controls.TextBlock NoContactsBlock;
        
        internal Microsoft.Phone.Controls.LongListSelector lstContacts;
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Windows.Application.LoadComponent(this, new System.Uri("/com.aviva.practiceapp;component/Plugins/org.apache.cordova.contacts/ContactPicke" +
                        "r.xaml", System.UriKind.Relative));
            this.ContentRoot = ((System.Windows.Controls.Grid)(this.FindName("ContentRoot")));
            this.HeaderBlock = ((System.Windows.Controls.TextBlock)(this.FindName("HeaderBlock")));
            this.NoContactsBlock = ((System.Windows.Controls.TextBlock)(this.FindName("NoContactsBlock")));
            this.lstContacts = ((Microsoft.Phone.Controls.LongListSelector)(this.FindName("lstContacts")));
        }
    }
}

