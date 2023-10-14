'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">financial-system documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-457fed65a530bf429468a2b9c6a512a3d9be4b906098a9d389990ed91f331c7328fbb07d8beb58fac7f6c7c38a84e1b544cc4acd2fdd45f6711a44cd01650960"' : 'data-bs-target="#xs-components-links-module-AppModule-457fed65a530bf429468a2b9c6a512a3d9be4b906098a9d389990ed91f331c7328fbb07d8beb58fac7f6c7c38a84e1b544cc4acd2fdd45f6711a44cd01650960"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-457fed65a530bf429468a2b9c6a512a3d9be4b906098a9d389990ed91f331c7328fbb07d8beb58fac7f6c7c38a84e1b544cc4acd2fdd45f6711a44cd01650960"' :
                                            'id="xs-components-links-module-AppModule-457fed65a530bf429468a2b9c6a512a3d9be4b906098a9d389990ed91f331c7328fbb07d8beb58fac7f6c7c38a84e1b544cc4acd2fdd45f6711a44cd01650960"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-457fed65a530bf429468a2b9c6a512a3d9be4b906098a9d389990ed91f331c7328fbb07d8beb58fac7f6c7c38a84e1b544cc4acd2fdd45f6711a44cd01650960"' : 'data-bs-target="#xs-injectables-links-module-AppModule-457fed65a530bf429468a2b9c6a512a3d9be4b906098a9d389990ed91f331c7328fbb07d8beb58fac7f6c7c38a84e1b544cc4acd2fdd45f6711a44cd01650960"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-457fed65a530bf429468a2b9c6a512a3d9be4b906098a9d389990ed91f331c7328fbb07d8beb58fac7f6c7c38a84e1b544cc4acd2fdd45f6711a44cd01650960"' :
                                        'id="xs-injectables-links-module-AppModule-457fed65a530bf429468a2b9c6a512a3d9be4b906098a9d389990ed91f331c7328fbb07d8beb58fac7f6c7c38a84e1b544cc4acd2fdd45f6711a44cd01650960"' }>
                                        <li class="link">
                                            <a href="injectables/HTTPStatus.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HTTPStatus</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryModule.html" data-type="entity-link" >CategoryModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CategoryModule-af915da89e55dabca3da370f09b446c5201eca4160c8a54359b0b33a422ec2e745e47841ee3a5182e587acec4fa7af2eb75b4bc46283504b29bfbf9010602361"' : 'data-bs-target="#xs-components-links-module-CategoryModule-af915da89e55dabca3da370f09b446c5201eca4160c8a54359b0b33a422ec2e745e47841ee3a5182e587acec4fa7af2eb75b4bc46283504b29bfbf9010602361"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CategoryModule-af915da89e55dabca3da370f09b446c5201eca4160c8a54359b0b33a422ec2e745e47841ee3a5182e587acec4fa7af2eb75b4bc46283504b29bfbf9010602361"' :
                                            'id="xs-components-links-module-CategoryModule-af915da89e55dabca3da370f09b446c5201eca4160c8a54359b0b33a422ec2e745e47841ee3a5182e587acec4fa7af2eb75b4bc46283504b29bfbf9010602361"' }>
                                            <li class="link">
                                                <a href="components/CategoryComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CategoryRoutingModule.html" data-type="entity-link" >CategoryRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DashboardModule-196dd962fb983e052fac4989c3495e9f73be64258e833d3bfbf3d835502fa62d37fc94e5bd6f40ad79aa94b66fbebb0a7361ddf4d1d026995b8e6b8329feaea1"' : 'data-bs-target="#xs-components-links-module-DashboardModule-196dd962fb983e052fac4989c3495e9f73be64258e833d3bfbf3d835502fa62d37fc94e5bd6f40ad79aa94b66fbebb0a7361ddf4d1d026995b8e6b8329feaea1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-196dd962fb983e052fac4989c3495e9f73be64258e833d3bfbf3d835502fa62d37fc94e5bd6f40ad79aa94b66fbebb0a7361ddf4d1d026995b8e6b8329feaea1"' :
                                            'id="xs-components-links-module-DashboardModule-196dd962fb983e052fac4989c3495e9f73be64258e833d3bfbf3d835502fa62d37fc94e5bd6f40ad79aa94b66fbebb0a7361ddf4d1d026995b8e6b8329feaea1"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRoutingModule.html" data-type="entity-link" >DashboardRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExpenditureModule.html" data-type="entity-link" >ExpenditureModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ExpenditureModule-deea4e5bb75d6915c3909c7aa571e7542d1ce8e00912cf9ba4932e3456183dd83ff3fe907c26a02eebd6209a149d96c22c25c2ce3adb1c9e98b3f2276bb7f826"' : 'data-bs-target="#xs-components-links-module-ExpenditureModule-deea4e5bb75d6915c3909c7aa571e7542d1ce8e00912cf9ba4932e3456183dd83ff3fe907c26a02eebd6209a149d96c22c25c2ce3adb1c9e98b3f2276bb7f826"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExpenditureModule-deea4e5bb75d6915c3909c7aa571e7542d1ce8e00912cf9ba4932e3456183dd83ff3fe907c26a02eebd6209a149d96c22c25c2ce3adb1c9e98b3f2276bb7f826"' :
                                            'id="xs-components-links-module-ExpenditureModule-deea4e5bb75d6915c3909c7aa571e7542d1ce8e00912cf9ba4932e3456183dd83ff3fe907c26a02eebd6209a149d96c22c25c2ce3adb1c9e98b3f2276bb7f826"' }>
                                            <li class="link">
                                                <a href="components/ExpenditureComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExpenditureComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExpenditureRoutingModule.html" data-type="entity-link" >ExpenditureRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NavbarModule.html" data-type="entity-link" >NavbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-NavbarModule-179a890683056b0d9cfcebc0c47d715d845dfe49a673a920a1e4d44f06292adc7d38e928b715ec3be22ae101782501e4a006e80e3b610333b63a9e27803c85fd"' : 'data-bs-target="#xs-components-links-module-NavbarModule-179a890683056b0d9cfcebc0c47d715d845dfe49a673a920a1e4d44f06292adc7d38e928b715ec3be22ae101782501e4a006e80e3b610333b63a9e27803c85fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavbarModule-179a890683056b0d9cfcebc0c47d715d845dfe49a673a920a1e4d44f06292adc7d38e928b715ec3be22ae101782501e4a006e80e3b610333b63a9e27803c85fd"' :
                                            'id="xs-components-links-module-NavbarModule-179a890683056b0d9cfcebc0c47d715d845dfe49a673a920a1e4d44f06292adc7d38e928b715ec3be22ae101782501e4a006e80e3b610333b63a9e27803c85fd"' }>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SidebarModule.html" data-type="entity-link" >SidebarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SidebarModule-263505422330d4892ca9873f640f6eb11433c52b508dc86588879e7f89302c0a45621a9cc89ef4fa9956d46f47b85fd2f344a7dd90dec451bf8589421a05e406"' : 'data-bs-target="#xs-components-links-module-SidebarModule-263505422330d4892ca9873f640f6eb11433c52b508dc86588879e7f89302c0a45621a9cc89ef4fa9956d46f47b85fd2f344a7dd90dec451bf8589421a05e406"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SidebarModule-263505422330d4892ca9873f640f6eb11433c52b508dc86588879e7f89302c0a45621a9cc89ef4fa9956d46f47b85fd2f344a7dd90dec451bf8589421a05e406"' :
                                            'id="xs-components-links-module-SidebarModule-263505422330d4892ca9873f640f6eb11433c52b508dc86588879e7f89302c0a45621a9cc89ef4fa9956d46f47b85fd2f344a7dd90dec451bf8589421a05e406"' }>
                                            <li class="link">
                                                <a href="components/SidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SystemModule.html" data-type="entity-link" >SystemModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SystemModule-47a542c2c58259b653425b21a89324d95d06c13f1fd274ac022ef764c3c41bdc930d9004e2d97067150746c64926bddd0333ed1cc79d568959dcdecc383819d5"' : 'data-bs-target="#xs-components-links-module-SystemModule-47a542c2c58259b653425b21a89324d95d06c13f1fd274ac022ef764c3c41bdc930d9004e2d97067150746c64926bddd0333ed1cc79d568959dcdecc383819d5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SystemModule-47a542c2c58259b653425b21a89324d95d06c13f1fd274ac022ef764c3c41bdc930d9004e2d97067150746c64926bddd0333ed1cc79d568959dcdecc383819d5"' :
                                            'id="xs-components-links-module-SystemModule-47a542c2c58259b653425b21a89324d95d06c13f1fd274ac022ef764c3c41bdc930d9004e2d97067150746c64926bddd0333ed1cc79d568959dcdecc383819d5"' }>
                                            <li class="link">
                                                <a href="components/SystemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SystemComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SystemRoutingModule.html" data-type="entity-link" >SystemRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Category.html" data-type="entity-link" >Category</a>
                            </li>
                            <li class="link">
                                <a href="classes/Expenditure.html" data-type="entity-link" >Expenditure</a>
                            </li>
                            <li class="link">
                                <a href="classes/FinancialSystem.html" data-type="entity-link" >FinancialSystem</a>
                            </li>
                            <li class="link">
                                <a href="classes/SelectModel.html" data-type="entity-link" >SelectModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CategoryService.html" data-type="entity-link" >CategoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ExpenditureService.html" data-type="entity-link" >ExpenditureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HTTPStatus.html" data-type="entity-link" >HTTPStatus</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link" >LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MenuService.html" data-type="entity-link" >MenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SistemaService.html" data-type="entity-link" >SistemaService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/LoaderInterceptor.html" data-type="entity-link" >LoaderInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});