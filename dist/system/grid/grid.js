System.register(['aurelia-framework', './grid-column', 'gooy/aurelia-compiler', './aurelia-bs-grid.css!'], function (_export) {
  'use strict';

  var bindable, inject, skipContentProcessing, ObserverLocator, customElement, GridColumn, Compiler, bootstrapPadding, Grid;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
      skipContentProcessing = _aureliaFramework.skipContentProcessing;
      ObserverLocator = _aureliaFramework.ObserverLocator;
      customElement = _aureliaFramework.customElement;
    }, function (_gridColumn) {
      GridColumn = _gridColumn.GridColumn;
    }, function (_gooyAureliaCompiler) {
      Compiler = _gooyAureliaCompiler.Compiler;
    }, function (_aureliaBsGridCss) {}],
    execute: function () {
      bootstrapPadding = 15;

      Grid = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(Grid, [{
          key: 'gridHeight',
          decorators: [bindable],
          initializer: function initializer() {
            return 0;
          },
          enumerable: true
        }, {
          key: 'initialLoad',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'filterDelay',
          decorators: [bindable],
          initializer: function initializer() {
            return 250;
          },
          enumerable: true
        }, {
          key: 'showColumnFilters',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'serverFiltering',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'serverPaging',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'pageable',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'pageSize',
          decorators: [bindable],
          initializer: function initializer() {
            return 10;
          },
          enumerable: true
        }, {
          key: 'page',
          decorators: [bindable],
          initializer: function initializer() {
            return 1;
          },
          enumerable: true
        }, {
          key: 'pagerSize',
          decorators: [bindable],
          initializer: function initializer() {
            return 10;
          },
          enumerable: true
        }, {
          key: 'showFirstLastButtons',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'showJumpButtons',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'pageSizes',
          decorators: [bindable],
          initializer: function initializer() {
            return [10, 25, 50];
          },
          enumerable: true
        }, {
          key: 'serverSorting',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'sortable',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'autoGenerateColumns',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'selectable',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }, {
          key: 'selectedItem',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'noRowsMessage',
          decorators: [bindable],
          initializer: function initializer() {
            return '';
          },
          enumerable: true
        }, {
          key: 'autoLoad',
          decorators: [bindable],
          initializer: function initializer() {
            return true;
          },
          enumerable: true
        }, {
          key: 'loadingMessage',
          decorators: [bindable],
          initializer: function initializer() {
            return 'Loading...';
          },
          enumerable: true
        }, {
          key: 'read',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'onReadError',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function Grid(element, compiler, observerLocator) {
          _classCallCheck(this, _Grid);

          _defineDecoratedPropertyDescriptor(this, 'gridHeight', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'initialLoad', _instanceInitializers);

          this.updateFiltersSetTimeout = undefined;

          _defineDecoratedPropertyDescriptor(this, 'filterDelay', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'showColumnFilters', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'serverFiltering', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'serverPaging', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'pageable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'pageSize', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'page', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'pagerSize', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'showFirstLastButtons', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'showJumpButtons', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'pageSizes', _instanceInitializers);

          this.firstVisibleItem = 0;
          this.lastVisibleItem = 0;
          this.pageNumber = 1;

          _defineDecoratedPropertyDescriptor(this, 'serverSorting', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'sortable', _instanceInitializers);

          this.sortProcessingOrder = [];
          this.sorting = [];

          _defineDecoratedPropertyDescriptor(this, 'autoGenerateColumns', _instanceInitializers);

          this.columnHeaders = [];
          this.columns = [];

          _defineDecoratedPropertyDescriptor(this, 'selectable', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'selectedItem', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'noRowsMessage', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'autoLoad', _instanceInitializers);

          this.loading = false;

          _defineDecoratedPropertyDescriptor(this, 'loadingMessage', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'read', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'onReadError', _instanceInitializers);

          this.cache = [];
          this.data = [];
          this.count = 0;
          this.unbinding = false;
          this.scrollBarWidth = 16;

          this.element = element;
          this.compiler = compiler;
          this.observerLocator = observerLocator;

          this.processUserTemplate();
        }

        _createDecoratedClass(Grid, [{
          key: 'processUserTemplate',
          value: function processUserTemplate() {
            var _this = this;

            var rowElement = this.element.querySelector('grid-row');
            var columnElements = Array.prototype.slice.call(rowElement.querySelectorAll('grid-col'));

            columnElements.forEach(function (c) {
              var attrs = Array.prototype.slice.call(c.attributes);
              var colHash = attrs.reduce(function (map, attribute) {
                map[attribute.name] = attribute.value;
                return map;
              }, {});

              var col = new GridColumn(colHash, c.innerHTML, _this);

              _this.addColumn(col);
            });

            this.rowAttrs = {};
            var attrs = Array.prototype.slice.call(rowElement.attributes);
            attrs.forEach(function (a) {
              return _this.rowAttrs[a.name] = a.value;
            });

            while (this.element.childNodes.length > 0) this.element.removeChild(this.element.childNodes[0]);
          }
        }, {
          key: 'attached',
          value: function attached() {

            var reqPadding = this.getScrollBarWidth() + bootstrapPadding;
            var topElement = document.querySelector('.top-part');
            topElement.style.paddingRight = reqPadding + 'px';

            this.gridHeightChanged();

            if (this.autoLoad === true) {
              this.refresh();
            }
          }
        }, {
          key: 'bind',
          value: function bind(executionContext) {

            this['$parent'] = executionContext;

            if (this.serverPaging && !this.serverSorting) {
              this.sortable = false;
            }

            var table = this.element.querySelector('.bottom-part');
            var rowTemplate = table.querySelector('.grid-tr');
            var div = document.createElement('div');
            div.className = 'bottom-content';

            var fragment = document.createDocumentFragment();

            fragment.appendChild(rowTemplate);

            rowTemplate.setAttribute('repeat.for', '$item of data');
            rowTemplate.setAttribute('class', '${ $item === $parent.selectedItem ? "info" : "" }');

            for (var prop in this.rowAttrs) {
              if (this.rowAttrs.hasOwnProperty(prop)) {
                rowTemplate.setAttribute(prop, this.rowAttrs[prop]);
              }
            }

            this.columns.forEach(function (c) {
              var td = document.createElement('div');
              td.className = 'bottom-box';

              for (var prop in c) {
                if (c.hasOwnProperty(prop)) {

                  if (prop == 'template') td.innerHTML = c[prop];else td.setAttribute(prop, c[prop]);
                }
              }

              div.appendChild(td);
              rowTemplate.appendChild(div);
            });

            this.compiler.compile(table, this, undefined, fragment);

            this.noRowsMessageChanged();
          }
        }, {
          key: 'unbind',
          value: function unbind() {
            this.unbinding = true;
            this.dontWatchForChanges();
          }
        }, {
          key: 'addColumn',
          value: function addColumn(col) {
            if (!this.sortable) col.nosort = true;

            this.columns.push(col);
          }
        }, {
          key: 'pageChanged',
          value: function pageChanged(page, oldValue) {
            if (page === oldValue) {
              return;
            }

            this.pageNumber = Number(page);
            this.refresh();
          }
        }, {
          key: 'pageSizeChanged',
          value: function pageSizeChanged() {
            this.pageChanged(1);
            this.updatePager();
          }
        }, {
          key: 'filterSortPage',
          value: function filterSortPage(data) {
            var tempData = data;

            if (this.showColumnFilters && !this.serverFiltering) tempData = this.applyFilter(tempData);

            this.count = tempData.length;

            if (this.sortable && !this.serverSorting) tempData = this.applySort(tempData);

            if (this.pageable && !this.serverPaging) tempData = this.applyPage(tempData);

            this.data = tempData;

            this.updatePager();

            this.watchForChanges();
          }
        }, {
          key: 'applyPage',
          value: function applyPage(data) {
            var start = (Number(this.pageNumber) - 1) * Number(this.pageSize);
            data = data.slice(start, start + Number(this.pageSize));

            return data;
          }
        }, {
          key: 'updatePager',
          value: function updatePager() {
            if (this.pager) this.pager.update(this.pageNumber, Number(this.pageSize), Number(this.count));

            this.firstVisibleItem = (this.pageNumber - 1) * Number(this.pageSize) + 1;
            this.lastVisibleItem = this.pageNumber * Number(this.pageSize);
          }
        }, {
          key: 'fieldSorter',
          value: function fieldSorter(fields) {
            return function (a, b) {
              return fields.map(function (o) {
                var dir = 1;
                if (o[0] === '-') {
                  dir = -1;
                  o = o.substring(1);
                }
                if (a[o] > b[o]) return dir;
                if (a[o] < b[o]) return -dir;
                return 0;
              }).reduce(function firstNonZeroValue(p, n) {
                return p ? p : n;
              }, 0);
            };
          }
        }, {
          key: 'pageSizesChanged',
          value: function pageSizesChanged() {
            this.refresh();
          }
        }, {
          key: 'sortChanged',
          value: function sortChanged(field) {
            var newSort = undefined;

            switch (this.sorting[field]) {
              case 'asc':
                newSort = 'desc';
                break;
              case 'desc':
                newSort = '';
                break;
              default:
                newSort = 'asc';
                break;
            }

            this.sorting[field] = newSort;

            var pos = this.sortProcessingOrder.indexOf(field);

            if (pos > -1) this.sortProcessingOrder.splice(pos, 1);

            this.sortProcessingOrder.push(field);

            this.refresh();
          }
        }, {
          key: 'applySort',
          value: function applySort(data) {
            var fields = [];

            for (var i = 0; i < this.sortProcessingOrder.length; i++) {
              var sort = this.sortProcessingOrder[i];

              for (var prop in this.sorting) {
                if (sort == prop && this.sorting[prop] !== '') fields.push(this.sorting[prop] === 'asc' ? prop : '-' + prop);
              }
            }

            data = data.sort(this.fieldSorter(fields));

            return data;
          }
        }, {
          key: 'changeSort',
          value: function changeSort(sort) {
            var index = this.sorting.findIndex(function (el, index) {
              if (el.name === sort.name) {
                return true;
              }

              return false;
            });

            if (index > -1) {
              this.sorting.splice(index, 1);
            }

            if (sort.value !== undefined) {
              this.sorting.push(sort);
            }

            this.refresh();
          }
        }, {
          key: 'applyFilter',
          value: function applyFilter(data) {
            var _this2 = this;

            return data.filter(function (row) {
              var include = true;

              for (var i = _this2.columns.length - 1; i >= 0; i--) {
                var col = _this2.columns[i];

                if (col.filterValue !== '' && row[col.field].toString().indexOf(col.filterValue) === -1) {
                  include = false;
                }
              }

              return include;
            });
          }
        }, {
          key: 'getFiltersQueryString',
          value: function getFiltersQueryString() {
            var filters = [];
            for (var i = this.columns.length - 1; i >= 0; i--) {
              var col = this.columns[i];
              var filterQueryString = col.getQueryString();
              if (filterQueryString !== undefined) {
                filters.push(filterQueryString);
              }
            }

            return filters;
          }
        }, {
          key: 'getFiltersValues',
          value: function getFiltersValues() {
            var filters = [];
            for (var i = this.columns.length - 1; i >= 0; i--) {
              var col = this.columns[i];
              filters = filters.concat(col.getFilterValue());
            }

            return filters;
          }
        }, {
          key: 'updateFilters',
          value: function updateFilters() {
            if (this.updateFiltersSetTimeout) {
              window.clearTimeout(this.updateFiltersSetTimeout);
            }

            this.updateFiltersSetTimeout = window.setTimeout(this.refresh.bind(this), this.filterDelay);
          }
        }, {
          key: 'refresh',
          value: function refresh() {
            this.dontWatchForChanges();

            if (this.serverPaging || this.serverSorting || this.serverFiltering || !this.initialLoad) this.getData();else this.filterSortPage(this.cache);
          }
        }, {
          key: 'getData',
          value: function getData() {
            var _this3 = this;

            if (!this.read) throw new Error('No read method specified for grid');

            this.initialLoad = true;

            this.loading = true;

            var queryValues = {};
            queryValues.filters = this.getFiltersValues();
            queryValues.paging = {
              page: this.pageNumber,
              count: window.Number(this.pageSize, 10)
            };
            queryValues.sorters = this.sorting;

            this.read(queryValues).then(function (result) {
              _this3.handleResult(result);

              _this3.loading = false;
            }, function (result) {
              if (_this3.onReadError) _this3.onReadError(result);

              _this3.loading = false;
            });
          }
        }, {
          key: 'handleResult',
          value: function handleResult(result) {
            var data = result.data;

            if (this.pageable && !this.serverPaging && !this.serverSorting && !this.serverFiltering) {
              this.cache = result.data;
              this.filterSortPage(this.cache);
            } else {
              this.data = result.data;
              this.filterSortPage(this.data);
            }

            this.count = result.count;

            this.updatePager();
          }
        }, {
          key: 'watchForChanges',
          value: function watchForChanges() {
            var _this4 = this;

            this.dontWatchForChanges();

            if (!this.unbinding) this.subscription = this.observerLocator.getArrayObserver(this.cache).subscribe(function (splices) {
                _this4.refresh();
              });
          }
        }, {
          key: 'dontWatchForChanges',
          value: function dontWatchForChanges() {
            if (this.subscription) this.subscription();
          }
        }, {
          key: 'select',
          value: function select(item) {
            if (this.selectable) this.selectedItem = item;
          }
        }, {
          key: 'noRowsMessageChanged',
          value: function noRowsMessageChanged() {
            this.showNoRowsMessage = this.noRowsMessage !== '';
          }
        }, {
          key: 'gridHeightChanged',
          value: function gridHeightChanged() {
            var cont = this.element.querySelector('.grid-container');

            if (this.gridHeight > 0) {
              cont.setAttribute('style', 'height:' + this.gridHeight + 'px');
            } else {
              cont.removeAttribute('style');
            }
          }
        }, {
          key: 'getScrollBarWidth',
          value: function getScrollBarWidth() {
            var inner = document.createElement('p');
            inner.style.width = "100%";
            inner.style.height = "200px";

            var outer = document.createElement('div');
            outer.style.position = "absolute";
            outer.style.top = "0px";
            outer.style.left = "0px";
            outer.style.visibility = "hidden";
            outer.style.width = "200px";
            outer.style.height = "150px";
            outer.style.overflow = "hidden";
            outer.appendChild(inner);

            document.body.appendChild(outer);
            var w1 = inner.offsetWidth;
            outer.style.overflow = 'scroll';
            var w2 = inner.offsetWidth;
            if (w1 == w2) w2 = outer.clientWidth;

            document.body.removeChild(outer);

            return w1 - w2;
          }
        }], null, _instanceInitializers);

        var _Grid = Grid;
        Grid = inject(Element, Compiler, ObserverLocator)(Grid) || Grid;
        Grid = skipContentProcessing()(Grid) || Grid;
        Grid = customElement('grid')(Grid) || Grid;
        return Grid;
      })();

      _export('Grid', Grid);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QkE3aEJVLElBQUk7QUFBSixZQUFJLEdBRGhCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUM5QixJQUFJLEtBQUosSUFBSTtBQUFKLFlBQUksR0FGaEIscUJBQXFCLEVBQUUsQ0FFWCxJQUFJLEtBQUosSUFBSTtBQUFKLFlBQUksR0FIaEIsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUdULElBQUksS0FBSixJQUFJO2VBQUosSUFBSSIsImZpbGUiOiJncmlkL2dyaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBpbmplY3QsIHNraXBDb250ZW50UHJvY2Vzc2luZywgT2JzZXJ2ZXJMb2NhdG9yLCBjdXN0b21FbGVtZW50IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0dyaWRDb2x1bW59IGZyb20gJy4vZ3JpZC1jb2x1bW4nO1xyXG5pbXBvcnQge0NvbXBpbGVyfSBmcm9tICdnb295L2F1cmVsaWEtY29tcGlsZXInO1xyXG5pbXBvcnQgJy4vYXVyZWxpYS1icy1ncmlkLmNzcyEnO1xyXG5cclxuY29uc3QgYm9vdHN0cmFwUGFkZGluZyA9IDE1O1xyXG5cclxuQGN1c3RvbUVsZW1lbnQoJ2dyaWQnKVxyXG5Ac2tpcENvbnRlbnRQcm9jZXNzaW5nKClcclxuQGluamVjdChFbGVtZW50LCBDb21waWxlciwgT2JzZXJ2ZXJMb2NhdG9yKVxyXG5leHBvcnQgY2xhc3MgR3JpZCB7XHJcblxyXG4gIC8qID09IFN0eWxpbmcgPT0gKi9cclxuICBAYmluZGFibGUgZ3JpZEhlaWdodCA9IDA7XHJcblxyXG4gIC8qID09IE9wdGlvbnMgPT0gKi9cclxuXHJcbiAgLy8gSW5pdGlhbCBsb2FkIGZsYWcgKGZvciBjbGllbnQgc2lkZSlcclxuICBAYmluZGFibGUgaW5pdGlhbExvYWQgPSBmYWxzZTtcclxuXHJcbiAgLy8gRmlsdGVyaW5nXHJcbiAgdXBkYXRlRmlsdGVyc1NldFRpbWVvdXQgPSB1bmRlZmluZWQ7XHJcbiAgQGJpbmRhYmxlIGZpbHRlckRlbGF5ID0gMjUwO1xyXG4gIEBiaW5kYWJsZSBzaG93Q29sdW1uRmlsdGVycyA9IGZhbHNlO1xyXG4gIEBiaW5kYWJsZSBzZXJ2ZXJGaWx0ZXJpbmcgPSBmYWxzZTtcclxuXHJcbiAgLy8gUGFnaW5hdGlvblxyXG4gIEBiaW5kYWJsZSBzZXJ2ZXJQYWdpbmcgPSBmYWxzZTtcclxuICBAYmluZGFibGUgcGFnZWFibGUgPSB0cnVlO1xyXG4gIEBiaW5kYWJsZSBwYWdlU2l6ZSA9IDEwO1xyXG4gIEBiaW5kYWJsZSBwYWdlID0gMTtcclxuICBAYmluZGFibGUgcGFnZXJTaXplID0gMTA7XHJcblxyXG4gIEBiaW5kYWJsZSBzaG93Rmlyc3RMYXN0QnV0dG9ucyA9IHRydWU7XHJcbiAgQGJpbmRhYmxlIHNob3dKdW1wQnV0dG9ucyA9IHRydWU7XHJcblxyXG4gIEBiaW5kYWJsZSBwYWdlU2l6ZXMgPSBbMTAsIDI1LCA1MF07XHJcblxyXG4gIGZpcnN0VmlzaWJsZUl0ZW0gPSAwO1xyXG4gIGxhc3RWaXNpYmxlSXRlbSA9IDA7XHJcblxyXG4gIHBhZ2VOdW1iZXIgPSAxO1xyXG5cclxuXHJcbiAgLy8gU29ydGluYXRpb25cclxuICBAYmluZGFibGUgc2VydmVyU29ydGluZyA9IGZhbHNlO1xyXG4gIEBiaW5kYWJsZSBzb3J0YWJsZSA9IHRydWU7XHJcbiAgc29ydFByb2Nlc3NpbmdPcmRlciA9IFtdOyAvLyBSZXByZXNlbnRzIHdoaWNoIG9yZGVyIHRvIGFwcGx5IHNvcnRzIHRvIGVhY2ggY29sdW1uXHJcbiAgc29ydGluZyA9IFtdO1xyXG5cclxuICAvLyBDb2x1bW4gZGVmc1xyXG4gIEBiaW5kYWJsZSBhdXRvR2VuZXJhdGVDb2x1bW5zO1xyXG4gIGNvbHVtbkhlYWRlcnMgPSBbXTtcclxuICBjb2x1bW5zID0gW107XHJcblxyXG4gIC8vIFNlbGVjdGlvblxyXG4gIEBiaW5kYWJsZSBzZWxlY3RhYmxlID0gZmFsc2U7XHJcbiAgQGJpbmRhYmxlIHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcblxyXG4gIC8vIE1pc2NcclxuICBAYmluZGFibGUgbm9Sb3dzTWVzc2FnZSA9ICcnO1xyXG5cclxuICAvLyBEYXRhIC4uLi5cclxuICBAYmluZGFibGUgYXV0b0xvYWQgPSB0cnVlO1xyXG4gIGxvYWRpbmcgPSBmYWxzZTtcclxuICBAYmluZGFibGUgbG9hZGluZ01lc3NhZ2UgPSAnTG9hZGluZy4uLic7XHJcblxyXG4gIC8vIFJlYWRcclxuICBAYmluZGFibGUgcmVhZCA9IG51bGw7XHJcbiAgQGJpbmRhYmxlIG9uUmVhZEVycm9yID0gbnVsbDtcclxuXHJcbiAgLy8gVHJhY2tpbmdcclxuICBjYWNoZSA9IFtdO1xyXG4gIGRhdGEgPSBbXTtcclxuICBjb3VudCA9IDA7XHJcblxyXG4gIC8vIFN1YnNjcmlwdGlvbiBoYW5kbGluZ1xyXG4gIHVuYmluZGluZyA9IGZhbHNlO1xyXG5cclxuICAvLyBWaXN1YWxcclxuICAvLyBUT0RPOiBjYWxjIHNjcm9sbGJhciB3aWR0aCB1c2luZyBicm93c2VyXHJcbiAgc2Nyb2xsQmFyV2lkdGggPSAxNjtcclxuXHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29tcGlsZXIsIG9ic2VydmVyTG9jYXRvcikge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICAgIHRoaXMuY29tcGlsZXIgPSBjb21waWxlcjtcclxuICAgIHRoaXMub2JzZXJ2ZXJMb2NhdG9yID0gb2JzZXJ2ZXJMb2NhdG9yO1xyXG5cclxuICAgIC8vIEdyYWIgdXNlciB0ZW1wbGF0ZSBmcm9tIGVsZW1lbnRcclxuICAgIHRoaXMucHJvY2Vzc1VzZXJUZW1wbGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1VzZXJUZW1wbGF0ZSgpIHtcclxuICAgIC8vIEdldCBhbnkgY29sIHRhZ3MgZnJvbSB0aGUgY29udGVudFxyXG4gICAgdmFyIHJvd0VsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignZ3JpZC1yb3cnKTtcclxuICAgIHZhciBjb2x1bW5FbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHJvd0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZ3JpZC1jb2wnKSk7XHJcblxyXG4gICAgY29sdW1uRWxlbWVudHMuZm9yRWFjaChjID0+IHtcclxuICAgICAgdmFyIGF0dHJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYy5hdHRyaWJ1dGVzKTtcclxuICAgICAgdmFyIGNvbEhhc2ggPSBhdHRycy5yZWR1Y2UoKG1hcCwgYXR0cmlidXRlKSA9PiB7XHJcbiAgICAgICAgbWFwW2F0dHJpYnV0ZS5uYW1lXSA9IGF0dHJpYnV0ZS52YWx1ZTtcclxuICAgICAgICByZXR1cm4gbWFwO1xyXG4gICAgICB9LCB7fSk7XHJcblxyXG4gICAgICB2YXIgY29sID0gbmV3IEdyaWRDb2x1bW4oY29sSGFzaCwgYy5pbm5lckhUTUwsIHRoaXMpO1xyXG5cclxuICAgICAgdGhpcy5hZGRDb2x1bW4oY29sKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFB1bGwgYW55IHJvdyBhdHRycyBpbnRvIGEgaGFzaCBvYmplY3RcclxuICAgIHRoaXMucm93QXR0cnMgPSB7fTtcclxuICAgIHZhciBhdHRycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHJvd0VsZW1lbnQuYXR0cmlidXRlcyk7XHJcbiAgICBhdHRycy5mb3JFYWNoKGEgPT4gdGhpcy5yb3dBdHRyc1thLm5hbWVdID0gYS52YWx1ZSk7XHJcblxyXG4gICAgLy8gUmVtb3ZlIGFsbCBjaGlsZHJlblxyXG4gICAgd2hpbGUgKHRoaXMuZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDApXHJcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQuY2hpbGROb2Rlc1swXSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLyogPT09IExpZmVjeWNsZSA9PT0gKi9cclxuICBhdHRhY2hlZCgpIHtcclxuXHJcbiAgICBsZXQgcmVxUGFkZGluZyA9IHRoaXMuZ2V0U2Nyb2xsQmFyV2lkdGgoKSArIGJvb3RzdHJhcFBhZGRpbmc7XHJcbiAgICBsZXQgdG9wRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtcGFydCcpXHJcbiAgICB0b3BFbGVtZW50LnN0eWxlLnBhZGRpbmdSaWdodCA9IHJlcVBhZGRpbmcgKyAncHgnO1xyXG5cclxuICAgIHRoaXMuZ3JpZEhlaWdodENoYW5nZWQoKTtcclxuXHJcbiAgICBpZiAodGhpcy5hdXRvTG9hZCA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBiaW5kKGV4ZWN1dGlvbkNvbnRleHQpIHtcclxuXHJcbiAgICB0aGlzWyckcGFyZW50J10gPSBleGVjdXRpb25Db250ZXh0O1xyXG5cclxuICAgIC8vIEVuc3VyZSB0aGUgZ3JpZCBzZXR0aW5nc1xyXG4gICAgLy8gSWYgd2UgY2FuIHBhZ2Ugb24gdGhlIHNlcnZlciBhbmQgd2UgY2FuJ3Qgc2VydmVyIHNvcnQsIHdlIGNhbid0IHNvcnQgbG9jYWxseVxyXG4gICAgaWYgKHRoaXMuc2VydmVyUGFnaW5nICYmICF0aGlzLnNlcnZlclNvcnRpbmcpIHtcclxuICAgICAgdGhpcy5zb3J0YWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEJ1aWxkIHRoZSByb3dzIHRoZW4gZHluYW1pY2FsbHkgY29tcGlsZSB0aGUgdGFibGVcclxuICAgIC8vIEdldCB0aGUgdGFibGUuLi5cclxuICAgIC8vdmFyIHRhYmxlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RhYmxlPnRib2R5Jyk7XHJcbiAgICAvL3ZhciByb3dUZW1wbGF0ZSA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ3RyJyk7XHJcbiAgICB2YXIgdGFibGUgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLmJvdHRvbS1wYXJ0Jyk7XHJcbiAgICB2YXIgcm93VGVtcGxhdGUgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKCcuZ3JpZC10cicpO1xyXG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTmFtZSA9ICdib3R0b20tY29udGVudCc7XHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgZnJhZ21lbnQgd2Ugd2lsbCBtYW5pcHVsYXRlIHRoZSBET00gaW5cclxuICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICAvLyBNb3ZlIHRoZSByb3cgdGVtcGxhdGUgdG8gdGhlIGZyYWdtZW50XHJcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChyb3dUZW1wbGF0ZSk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHRoZSByZXBlYXRlclxyXG4gICAgcm93VGVtcGxhdGUuc2V0QXR0cmlidXRlKCdyZXBlYXQuZm9yJywgJyRpdGVtIG9mIGRhdGEnKTtcclxuICAgIHJvd1RlbXBsYXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnJHsgJGl0ZW0gPT09ICRwYXJlbnQuc2VsZWN0ZWRJdGVtID8gXCJpbmZvXCIgOiBcIlwiIH0nKTtcclxuXHJcbiAgICAvLyBDb3B5IGFueSB1c2VyIHNwZWNpZmllZCByb3cgYXR0cmlidXRlcyB0byB0aGUgcm93IHRlbXBsYXRlXHJcbiAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMucm93QXR0cnMpIHtcclxuICAgICAgaWYgKHRoaXMucm93QXR0cnMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuICAgICAgICByb3dUZW1wbGF0ZS5zZXRBdHRyaWJ1dGUocHJvcCwgdGhpcy5yb3dBdHRyc1twcm9wXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIGNvbHVtbnNcclxuICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICB2YXIgdGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgdGQuY2xhc3NOYW1lID0gJ2JvdHRvbS1ib3gnO1xyXG5cclxuICAgICAgLy8gU2V0IGF0dHJpYnV0ZXNcclxuICAgICAgZm9yICh2YXIgcHJvcCBpbiBjKSB7XHJcbiAgICAgICAgaWYgKGMuaGFzT3duUHJvcGVydHkocHJvcCkpIHtcclxuXHJcbiAgICAgICAgICBpZiAocHJvcCA9PSAndGVtcGxhdGUnKVxyXG4gICAgICAgICAgICB0ZC5pbm5lckhUTUwgPSBjW3Byb3BdO1xyXG4gICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0ZC5zZXRBdHRyaWJ1dGUocHJvcCwgY1twcm9wXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBkaXYuYXBwZW5kQ2hpbGQodGQpO1xyXG4gICAgICByb3dUZW1wbGF0ZS5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ29tcGlsZVxyXG4gICAgdGhpcy5jb21waWxlci5jb21waWxlKHRhYmxlLCB0aGlzLCB1bmRlZmluZWQsIGZyYWdtZW50KTtcclxuXHJcbiAgICAvLyBIQUNLOiB3aHkgaXMgdGhlIGNoYW5nZSBoYW5kbGVyIG5vdCBmaXJpbmcgZm9yIG5vUm93c01lc3NhZ2U/XHJcbiAgICB0aGlzLm5vUm93c01lc3NhZ2VDaGFuZ2VkKCk7XHJcbiAgfVxyXG5cclxuICB1bmJpbmQoKSB7XHJcbiAgICB0aGlzLnVuYmluZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLmRvbnRXYXRjaEZvckNoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIC8qID09PSBDb2x1bW4gaGFuZGxpbmcgPT09ICovXHJcbiAgYWRkQ29sdW1uKGNvbCkge1xyXG5cclxuICAgIC8vIE5vLXNvcnQgaWYgZ3JpZCBpcyBub3Qgc29ydGFibGVcclxuICAgIGlmICghdGhpcy5zb3J0YWJsZSlcclxuICAgICAgY29sLm5vc29ydCA9IHRydWU7XHJcblxyXG4gICAgdGhpcy5jb2x1bW5zLnB1c2goY29sKTtcclxuICB9XHJcblxyXG4gIC8qID09PSBQYWdpbmcgPT09ICovXHJcbiAgcGFnZUNoYW5nZWQocGFnZSwgb2xkVmFsdWUpIHtcclxuICAgIGlmIChwYWdlID09PSBvbGRWYWx1ZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYWdlTnVtYmVyID0gTnVtYmVyKHBhZ2UpO1xyXG4gICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgfVxyXG5cclxuICBwYWdlU2l6ZUNoYW5nZWQoKSB7XHJcbiAgICB0aGlzLnBhZ2VDaGFuZ2VkKDEpO1xyXG4gICAgdGhpcy51cGRhdGVQYWdlcigpO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVyU29ydFBhZ2UoZGF0YSkge1xyXG4gICAgLy8gQXBwbGllcyBmaWx0ZXIsIHNvcnQgdGhlbiBwYWdlXHJcbiAgICAvLyAxLiBGaXJzdCBmaWx0ZXIgdGhlIGRhdGEgZG93biB0byB0aGUgc2V0IHdlIHdhbnQsIGlmIHdlIGFyZSB1c2luZyBsb2NhbCBkYXRhXHJcbiAgICB2YXIgdGVtcERhdGEgPSBkYXRhO1xyXG5cclxuICAgIGlmICh0aGlzLnNob3dDb2x1bW5GaWx0ZXJzICYmICF0aGlzLnNlcnZlckZpbHRlcmluZylcclxuICAgICAgdGVtcERhdGEgPSB0aGlzLmFwcGx5RmlsdGVyKHRlbXBEYXRhKTtcclxuXHJcbiAgICAvLyBDb3VudCB0aGUgZGF0YSBub3cgYmVmb3JlIHRoZSBzb3J0L3BhZ2VcclxuICAgIHRoaXMuY291bnQgPSB0ZW1wRGF0YS5sZW5ndGg7XHJcblxyXG4gICAgLy8gMi4gTm93IHNvcnQgdGhlIGRhdGFcclxuICAgIGlmICh0aGlzLnNvcnRhYmxlICYmICF0aGlzLnNlcnZlclNvcnRpbmcpXHJcbiAgICAgIHRlbXBEYXRhID0gdGhpcy5hcHBseVNvcnQodGVtcERhdGEpO1xyXG5cclxuICAgIC8vIDMuIE5vdyBhcHBseSBwYWdpbmdcclxuICAgIGlmICh0aGlzLnBhZ2VhYmxlICYmICF0aGlzLnNlcnZlclBhZ2luZylcclxuICAgICAgdGVtcERhdGEgPSB0aGlzLmFwcGx5UGFnZSh0ZW1wRGF0YSk7XHJcblxyXG4gICAgdGhpcy5kYXRhID0gdGVtcERhdGE7XHJcblxyXG4gICAgdGhpcy51cGRhdGVQYWdlcigpO1xyXG5cclxuICAgIHRoaXMud2F0Y2hGb3JDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBhcHBseVBhZ2UoZGF0YSkge1xyXG4gICAgdmFyIHN0YXJ0ID0gKE51bWJlcih0aGlzLnBhZ2VOdW1iZXIpIC0gMSkgKiBOdW1iZXIodGhpcy5wYWdlU2l6ZSk7XHJcbiAgICBkYXRhID0gZGF0YS5zbGljZShzdGFydCwgc3RhcnQgKyBOdW1iZXIodGhpcy5wYWdlU2l6ZSkpO1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcblxyXG4gIHVwZGF0ZVBhZ2VyKCkge1xyXG4gICAgaWYgKHRoaXMucGFnZXIpXHJcbiAgICAgIHRoaXMucGFnZXIudXBkYXRlKHRoaXMucGFnZU51bWJlciwgTnVtYmVyKHRoaXMucGFnZVNpemUpLCBOdW1iZXIodGhpcy5jb3VudCkpO1xyXG5cclxuICAgIHRoaXMuZmlyc3RWaXNpYmxlSXRlbSA9ICh0aGlzLnBhZ2VOdW1iZXIgLSAxKSAqIE51bWJlcih0aGlzLnBhZ2VTaXplKSArIDE7XHJcbiAgICB0aGlzLmxhc3RWaXNpYmxlSXRlbSA9ICh0aGlzLnBhZ2VOdW1iZXIpICogTnVtYmVyKHRoaXMucGFnZVNpemUpO1xyXG4gIH1cclxuXHJcbiAgLyogPT09IFNvcnRpbmcgPT09ICovXHJcbiAgZmllbGRTb3J0ZXIoZmllbGRzKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgcmV0dXJuIGZpZWxkc1xyXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKG8pIHtcclxuICAgICAgICAgIHZhciBkaXIgPSAxO1xyXG4gICAgICAgICAgaWYgKG9bMF0gPT09ICctJykge1xyXG4gICAgICAgICAgICBkaXIgPSAtMTtcclxuICAgICAgICAgICAgbyA9IG8uc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaWYgKGFbb10gPiBiW29dKSByZXR1cm4gZGlyO1xyXG4gICAgICAgICAgaWYgKGFbb10gPCBiW29dKSByZXR1cm4gLShkaXIpO1xyXG4gICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAucmVkdWNlKGZ1bmN0aW9uIGZpcnN0Tm9uWmVyb1ZhbHVlKHAsIG4pIHtcclxuICAgICAgICAgIHJldHVybiBwID8gcCA6IG47XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcGFnZVNpemVzQ2hhbmdlZCgpIHtcclxuICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gdG9kbzogcmVtb3ZlIG9yIHJlZG9cclxuICBzb3J0Q2hhbmdlZChmaWVsZCkge1xyXG5cclxuICAgIC8vIERldGVybWluZSBuZXcgc29ydFxyXG4gICAgdmFyIG5ld1NvcnQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgLy8gRmlndXJlIG91dCB3aGljaCB3YXkgdGhpcyBmaWVsZCBzaG91bGQgYmUgc29ydGluZ1xyXG4gICAgc3dpdGNoICh0aGlzLnNvcnRpbmdbZmllbGRdKSB7XHJcbiAgICAgIGNhc2UgJ2FzYyc6XHJcbiAgICAgICAgbmV3U29ydCA9ICdkZXNjJztcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZGVzYyc6XHJcbiAgICAgICAgbmV3U29ydCA9ICcnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIG5ld1NvcnQgPSAnYXNjJztcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNvcnRpbmdbZmllbGRdID0gbmV3U29ydDtcclxuXHJcbiAgICAvLyBJZiB0aGUgc29ydCBpcyBwcmVzZW50IGluIHRoZSBzb3J0IHN0YWNrLCBzbGljZSBpdCB0byB0aGUgYmFjayBvZiB0aGUgc3RhY2ssIG90aGVyd2lzZSBqdXN0IGFkZCBpdFxyXG4gICAgdmFyIHBvcyA9IHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlci5pbmRleE9mKGZpZWxkKTtcclxuXHJcbiAgICBpZiAocG9zID4gLTEpXHJcbiAgICAgIHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlci5zcGxpY2UocG9zLCAxKTtcclxuXHJcbiAgICB0aGlzLnNvcnRQcm9jZXNzaW5nT3JkZXIucHVzaChmaWVsZCk7XHJcblxyXG4gICAgLy8gQXBwbHkgdGhlIG5ldyBzb3J0XHJcbiAgICB0aGlzLnJlZnJlc2goKTtcclxuICB9XHJcblxyXG4gIC8vIHRvZG86IHJlbW92ZSBvciByZWRvXHJcbiAgYXBwbHlTb3J0KGRhdGEpIHtcclxuXHJcbiAgICAvLyBGb3JtYXQgdGhlIHNvcnQgZmllbGRzXHJcbiAgICB2YXIgZmllbGRzID0gW107XHJcblxyXG4gICAgLy8gR2V0IHRoZSBmaWVsZHMgaW4gdGhlICdzb3J0aW5nT1JkZXInXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgc29ydCA9IHRoaXMuc29ydFByb2Nlc3NpbmdPcmRlcltpXTtcclxuXHJcbiAgICAgIGZvciAodmFyIHByb3AgaW4gdGhpcy5zb3J0aW5nKSB7XHJcbiAgICAgICAgaWYgKHNvcnQgPT0gcHJvcCAmJiB0aGlzLnNvcnRpbmdbcHJvcF0gIT09ICcnKVxyXG4gICAgICAgICAgZmllbGRzLnB1c2godGhpcy5zb3J0aW5nW3Byb3BdID09PSAnYXNjJyA/IChwcm9wKSA6ICgnLScgKyBwcm9wKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gSWYgc2VydmVyIHNvcnQsIGp1c3QgcmVmcmVzaFxyXG4gICAgZGF0YSA9IGRhdGEuc29ydCh0aGlzLmZpZWxkU29ydGVyKGZpZWxkcykpO1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxuXHJcblxyXG4gIGNoYW5nZVNvcnQoc29ydCkge1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5zb3J0aW5nLmZpbmRJbmRleCgoZWwsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChlbC5uYW1lID09PSBzb3J0Lm5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgdGhpcy5zb3J0aW5nLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvcnQudmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnNvcnRpbmcucHVzaChzb3J0KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlZnJlc2goKTtcclxuICB9XHJcblxyXG4gIC8qID09PSBGaWx0ZXJpbmcgPT09ICovXHJcbiAgYXBwbHlGaWx0ZXIoZGF0YSkge1xyXG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKChyb3cpID0+IHtcclxuICAgICAgdmFyIGluY2x1ZGUgPSB0cnVlO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMuY29sdW1ucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIHZhciBjb2wgPSB0aGlzLmNvbHVtbnNbaV07XHJcblxyXG4gICAgICAgIGlmIChjb2wuZmlsdGVyVmFsdWUgIT09ICcnICYmIHJvd1tjb2wuZmllbGRdLnRvU3RyaW5nKCkuaW5kZXhPZihjb2wuZmlsdGVyVmFsdWUpID09PSAtMSkge1xyXG4gICAgICAgICAgaW5jbHVkZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGluY2x1ZGU7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldEZpbHRlcnNRdWVyeVN0cmluZygpIHtcclxuICAgIHZhciBmaWx0ZXJzID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIGxldCBjb2wgPSB0aGlzLmNvbHVtbnNbaV07XHJcbiAgICAgIGxldCBmaWx0ZXJRdWVyeVN0cmluZyA9IGNvbC5nZXRRdWVyeVN0cmluZygpO1xyXG4gICAgICBpZiAoZmlsdGVyUXVlcnlTdHJpbmcgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGZpbHRlcnMucHVzaChmaWx0ZXJRdWVyeVN0cmluZyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmlsdGVycztcclxuICB9XHJcblxyXG4gIGdldEZpbHRlcnNWYWx1ZXMoKSB7XHJcbiAgICBsZXQgZmlsdGVycyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IHRoaXMuY29sdW1ucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICBsZXQgY29sID0gdGhpcy5jb2x1bW5zW2ldO1xyXG4gICAgICBmaWx0ZXJzID0gZmlsdGVycy5jb25jYXQoY29sLmdldEZpbHRlclZhbHVlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmaWx0ZXJzO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRmlsdGVycygpIHtcclxuICAgIGlmICh0aGlzLnVwZGF0ZUZpbHRlcnNTZXRUaW1lb3V0KSB7XHJcbiAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy51cGRhdGVGaWx0ZXJzU2V0VGltZW91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51cGRhdGVGaWx0ZXJzU2V0VGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KHRoaXMucmVmcmVzaC5iaW5kKHRoaXMpLCB0aGlzLmZpbHRlckRlbGF5KTtcclxuICB9XHJcblxyXG4gIC8qID09PSBEYXRhID09PSAqL1xyXG4gIHJlZnJlc2goKSB7XHJcbiAgICAvLyBJZiB3ZSBoYXZlIGFueSBzZXJ2ZXIgc2lkZSBzdHVmZiB3ZSBuZWVkIHRvIGdldCB0aGUgZGF0YSBmaXJzdFxyXG4gICAgdGhpcy5kb250V2F0Y2hGb3JDaGFuZ2VzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VydmVyUGFnaW5nIHx8IHRoaXMuc2VydmVyU29ydGluZyB8fCB0aGlzLnNlcnZlckZpbHRlcmluZyB8fCAhdGhpcy5pbml0aWFsTG9hZClcclxuICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuZmlsdGVyU29ydFBhZ2UodGhpcy5jYWNoZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YSgpIHtcclxuICAgIGlmICghdGhpcy5yZWFkKVxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHJlYWQgbWV0aG9kIHNwZWNpZmllZCBmb3IgZ3JpZCcpO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbExvYWQgPSB0cnVlO1xyXG5cclxuICAgIC8vIFRPRE86IEltcGxlbWVudCBwcm9ncmVzcyBpbmRpY2F0b3JcclxuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcblxyXG4gICAgLy8gVHJ5IHRvIHJlYWQgZnJvbSB0aGUgZGF0YSBhZGFwdGVyXHJcbiAgICBsZXQgcXVlcnlWYWx1ZXMgPSB7fTtcclxuICAgIHF1ZXJ5VmFsdWVzLmZpbHRlcnMgPSB0aGlzLmdldEZpbHRlcnNWYWx1ZXMoKTtcclxuICAgIHF1ZXJ5VmFsdWVzLnBhZ2luZyA9IHtcclxuICAgICAgcGFnZTogdGhpcy5wYWdlTnVtYmVyLFxyXG4gICAgICBjb3VudDogd2luZG93Lk51bWJlcih0aGlzLnBhZ2VTaXplLCAxMClcclxuICAgIH07XHJcbiAgICBxdWVyeVZhbHVlcy5zb3J0ZXJzID0gdGhpcy5zb3J0aW5nO1xyXG5cclxuICAgIHRoaXMucmVhZChxdWVyeVZhbHVlcykudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgIC8vIERhdGEgc2hvdWxkIGJlIGluIHRoZSByZXN1bHQgc28gZ3JhYiBpdCBhbmQgYXNzaWduIGl0IHRvIHRoZSBkYXRhIHByb3BlcnR5XHJcbiAgICAgIHRoaXMuaGFuZGxlUmVzdWx0KHJlc3VsdCk7XHJcblxyXG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgIH0sIChyZXN1bHQpID0+IHtcclxuICAgICAgLy8gU29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcsIG5vdGlmeSB0aGUgY29uc3VtZXJcclxuICAgICAgaWYgKHRoaXMub25SZWFkRXJyb3IpXHJcbiAgICAgICAgdGhpcy5vblJlYWRFcnJvcihyZXN1bHQpO1xyXG5cclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVJlc3VsdChyZXN1bHQpIHtcclxuXHJcbiAgICAvLyBUT0RPOiBDaGVjayB2YWxpZCBzdHVmZiB3YXMgcmV0dXJuZWRcclxuICAgIHZhciBkYXRhID0gcmVzdWx0LmRhdGE7XHJcblxyXG4gICAgLy8gSXMgdGhlIGRhdGEgYmVpbmcgcGFnaW5hdGVkIG9uIHRoZSBjbGllbnQgc2lkZT9cclxuICAgIC8vIFRPRE86IFdvcmsgb3V0IHdoZW4gd2Ugc2hvdWxkIHdlIHVzZSB0aGUgY2FjaGUuLi4gZXZlcj8gSWYgaXQncyBsb2NhbCBkYXRhXHJcbiAgICBpZiAodGhpcy5wYWdlYWJsZSAmJiAhdGhpcy5zZXJ2ZXJQYWdpbmcgJiYgIXRoaXMuc2VydmVyU29ydGluZyAmJiAhdGhpcy5zZXJ2ZXJGaWx0ZXJpbmcpIHtcclxuICAgICAgLy8gQ2FjaGUgdGhlIGRhdGFcclxuICAgICAgdGhpcy5jYWNoZSA9IHJlc3VsdC5kYXRhO1xyXG4gICAgICB0aGlzLmZpbHRlclNvcnRQYWdlKHRoaXMuY2FjaGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kYXRhID0gcmVzdWx0LmRhdGE7XHJcbiAgICAgIHRoaXMuZmlsdGVyU29ydFBhZ2UodGhpcy5kYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNvdW50ID0gcmVzdWx0LmNvdW50O1xyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgcGFnZXIgLSBtYXliZSB0aGUgZ3JpZCBvcHRpb25zIHNob3VsZCBjb250YWluIGFuIHVwZGF0ZSBjYWxsYmFjayBpbnN0ZWFkIG9mIHJlZmZpbmcgdGhlXHJcbiAgICAvLyBwYWdlciBpbnRvIHRoZSBjdXJyZW50IFZNP1xyXG4gICAgdGhpcy51cGRhdGVQYWdlcigpO1xyXG4gIH1cclxuXHJcbiAgd2F0Y2hGb3JDaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5kb250V2F0Y2hGb3JDaGFuZ2VzKCk7XHJcblxyXG4gICAgLy8gR3VhcmQgYWdhaW5zdCBkYXRhIHJlZnJlc2ggZXZlbnRzIGhpdHRpbmcgYWZ0ZXIgdGhlIHVzZXIgZG9lcyBhbnl0aGluZyB0aGF0IHVubG9hZHMgdGhlIGdyaWRcclxuICAgIGlmICghdGhpcy51bmJpbmRpbmcpXHJcbiAgICAvLyBXZSBjYW4gdXBkYXRlIHRoZSBwYWdlciBhdXRvbWFnaWNhbGx5XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5vYnNlcnZlckxvY2F0b3JcclxuICAgICAgICAuZ2V0QXJyYXlPYnNlcnZlcih0aGlzLmNhY2hlKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKHNwbGljZXMpID0+IHtcclxuICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZG9udFdhdGNoRm9yQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbilcclxuICAgICAgdGhpcy5zdWJzY3JpcHRpb24oKTtcclxuICB9XHJcblxyXG4gIC8qID09PSBTZWxlY3Rpb24gPT09ICovXHJcblxyXG4gIHNlbGVjdChpdGVtKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RhYmxlKVxyXG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgfVxyXG5cclxuICAvKiA9PT0gQ2hhbmdlIGhhbmRsZXJzID09PSAqL1xyXG4gIG5vUm93c01lc3NhZ2VDaGFuZ2VkKCkge1xyXG4gICAgdGhpcy5zaG93Tm9Sb3dzTWVzc2FnZSA9IHRoaXMubm9Sb3dzTWVzc2FnZSAhPT0gJyc7XHJcbiAgfVxyXG5cclxuICBncmlkSGVpZ2h0Q2hhbmdlZCgpIHtcclxuXHJcbiAgICAvLyBUT0RPOiBNYWtlIHRoaXMgYSBvbmUgb2ZmXHJcbiAgICB2YXIgY29udCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JpZC1jb250YWluZXInKTtcclxuXHJcbiAgICBpZiAodGhpcy5ncmlkSGVpZ2h0ID4gMCkge1xyXG4gICAgICBjb250LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnaGVpZ2h0OicgKyB0aGlzLmdyaWRIZWlnaHQgKyAncHgnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnQucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xyXG4gICAgfVxyXG4gIH1cclxuICBnZXRTY3JvbGxCYXJXaWR0aCAoKSB7XHJcbiAgICBsZXQgaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBpbm5lci5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xyXG4gICAgaW5uZXIuc3R5bGUuaGVpZ2h0ID0gXCIyMDBweFwiO1xyXG5cclxuICAgIGxldCBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgb3V0ZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICBvdXRlci5zdHlsZS50b3AgPSBcIjBweFwiO1xyXG4gICAgb3V0ZXIuc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcbiAgICBvdXRlci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgIG91dGVyLnN0eWxlLndpZHRoID0gXCIyMDBweFwiO1xyXG4gICAgb3V0ZXIuc3R5bGUuaGVpZ2h0ID0gXCIxNTBweFwiO1xyXG4gICAgb3V0ZXIuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xyXG4gICAgb3V0ZXIuYXBwZW5kQ2hpbGQgKGlubmVyKTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkIChvdXRlcik7XHJcbiAgICBsZXQgdzEgPSBpbm5lci5vZmZzZXRXaWR0aDtcclxuICAgIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XHJcbiAgICBsZXQgdzIgPSBpbm5lci5vZmZzZXRXaWR0aDtcclxuICAgIGlmICh3MSA9PSB3MikgdzIgPSBvdXRlci5jbGllbnRXaWR0aDtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkIChvdXRlcik7XHJcblxyXG4gICAgcmV0dXJuICh3MSAtIHcyKTtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==