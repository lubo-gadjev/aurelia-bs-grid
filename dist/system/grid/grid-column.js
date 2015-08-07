System.register([], function (_export) {
  'use strict';

  var GridColumn;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [],
    execute: function () {
      GridColumn = (function () {
        function GridColumn(config, template, parent) {
          _classCallCheck(this, GridColumn);

          this.specialColumns = ['heading', 'nosort'];

          this.template = template;
          this.field = config.field;
          this.parent = parent;

          if (!this.field) throw new Error('field is required');

          this.heading = config.heading || config.field;
          this.nosort = config.nosort || false;
          this.sortDirection = undefined;

          this.filterValue = undefined;
          this.filterValueFrom = undefined;
          this.filterValueTo = undefined;
          this.showInputFilter = config['input-filter'] === 'true';
          this.showDateFilter = config['date-filter'] === 'true';
          this.showDateFromToFilter = config['date-filter-from-to'] === 'true';
          this.showBooleanFilter = config['boolean-filter'] === 'true';
          this.showSelect2Filter = config['select2-filter'] === 'true';
          this.select2Items = config['select2-items'];

          for (var prop in config) {
            if (config.hasOwnProperty(prop) && this.specialColumns.indexOf(prop) < 0) {
              this[prop] = config[prop];
            }
          }
        }

        _createClass(GridColumn, [{
          key: 'changeDirectionSort',
          value: function changeDirectionSort() {
            switch (this.sortDirection) {
              case 'asc':
                this.sortDirection = 'desc';
                break;
              case 'desc':
                this.sortDirection = undefined;
                break;
              default:
                this.sortDirection = 'asc';
                break;
            }

            this.parent.changeSort({
              name: this.field,
              value: this.sortDirection
            });
          }
        }, {
          key: 'updateFilters',
          value: function updateFilters() {
            this.parent.updateFilters();
          }
        }, {
          key: 'hasFilterValue',
          value: function hasFilterValue() {
            if (this.showDateFromToFilter === true) {
              return this.filterValueFrom !== undefined || this.filterValueTo !== undefined;
            } else {
              return this.filterValue !== undefined;
            }
          }
        }, {
          key: 'toggleBooleanFilter',
          value: function toggleBooleanFilter() {
            if (this.filterValue === undefined) {
              this.filterValue = true;
            } else {
              this.filterValue = !this.filterValue;
            }

            this.updateFilters();
          }
        }, {
          key: 'clearBooleanFilter',
          value: function clearBooleanFilter() {
            this.filterValue = undefined;
            this.updateFilters();
          }
        }, {
          key: 'getFilterValue',
          value: function getFilterValue() {
            if (this.showDateFromToFilter === true) {
              if (this.filterValueFrom && this.filterValueTo) {
                return [{
                  name: this.field + 'From',
                  value: this.filterValueFrom.unix() * 1000
                }, {
                  name: this.field + 'To',
                  value: this.filterValueTo.unix() * 1000
                }];
              } else if (this.filterValueFrom) {
                return [{
                  name: this.field + 'From',
                  value: this.filterValueFrom.unix() * 1000
                }];
              } else if (this.filterValueTo) {
                return [{
                  name: this.field + 'To',
                  value: this.filterValueTo.unix() * 1000
                }];
              }
            } else if (this.filterValue) {
              return [{
                name: this.field,
                value: this.filterValue
              }];
            }

            return [];
          }
        }, {
          key: 'getQueryString',
          value: function getQueryString() {
            if (this.showDateFromToFilter === true) {
              if (this.filterValueFrom && this.filterValueTo) {
                return this.field + 'From=' + this.filterValueFrom.unix() * 1000 + '&' + this.field + 'To=' + this.filterValueTo.unix() * 1000;
              } else if (this.filterValueFrom) {
                return this.field + 'From=' + this.filterValueFrom.unix() * 1000;
              } else if (this.filterValueTo) {
                return this.field + 'To=' + this.filterValueTo.unix() * 1000;
              } else {
                return undefined;
              }
            } else if (this.filterValue) {
              return this.field + '=' + this.filterValue;
            } else {
              return undefined;
            }
          }
        }]);

        return GridColumn;
      })();

      _export('GridColumn', GridColumn);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUFHO2FBQzVDLE1BQU07QUFDTCxxQkFBTyxTQUFTLENBQUM7YUFDbEI7V0FDRjs7O2VBL0hVLFVBQVUiLCJmaWxlIjoiZ3JpZC9ncmlkLWNvbHVtbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBHcmlkQ29sdW1uIHtcclxuXHJcbiAgc3BlY2lhbENvbHVtbnMgPSBbJ2hlYWRpbmcnLCAnbm9zb3J0J107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZywgdGVtcGxhdGUsIHBhcmVudCkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xyXG4gICAgdGhpcy5maWVsZCA9IGNvbmZpZy5maWVsZDtcclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgIGlmICghdGhpcy5maWVsZClcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdmaWVsZCBpcyByZXF1aXJlZCcpO1xyXG5cclxuICAgIHRoaXMuaGVhZGluZyA9IGNvbmZpZy5oZWFkaW5nIHx8IGNvbmZpZy5maWVsZDtcclxuICAgIHRoaXMubm9zb3J0ID0gY29uZmlnLm5vc29ydCB8fCBmYWxzZTtcclxuICAgIHRoaXMuc29ydERpcmVjdGlvbiA9IHVuZGVmaW5lZDtcclxuXHJcbiAgICB0aGlzLmZpbHRlclZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5maWx0ZXJWYWx1ZUZyb20gPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlVG8gPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLnNob3dJbnB1dEZpbHRlciA9IGNvbmZpZ1snaW5wdXQtZmlsdGVyJ10gPT09ICd0cnVlJztcclxuICAgIHRoaXMuc2hvd0RhdGVGaWx0ZXIgPSBjb25maWdbJ2RhdGUtZmlsdGVyJ10gPT09ICd0cnVlJztcclxuICAgIHRoaXMuc2hvd0RhdGVGcm9tVG9GaWx0ZXIgPSBjb25maWdbJ2RhdGUtZmlsdGVyLWZyb20tdG8nXSA9PT0gJ3RydWUnO1xyXG4gICAgdGhpcy5zaG93Qm9vbGVhbkZpbHRlciA9IGNvbmZpZ1snYm9vbGVhbi1maWx0ZXInXSA9PT0gJ3RydWUnO1xyXG4gICAgdGhpcy5zaG93U2VsZWN0MkZpbHRlciA9IGNvbmZpZ1snc2VsZWN0Mi1maWx0ZXInXSA9PT0gJ3RydWUnO1xyXG4gICAgdGhpcy5zZWxlY3QySXRlbXMgPSBjb25maWdbJ3NlbGVjdDItaXRlbXMnXTtcclxuXHJcbiAgICAvLyBTZXQgYXR0cmlidXRlc1xyXG4gICAgZm9yICh2YXIgcHJvcCBpbiBjb25maWcpIHtcclxuICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShwcm9wKSAmJiB0aGlzLnNwZWNpYWxDb2x1bW5zLmluZGV4T2YocHJvcCkgPCAwKSB7XHJcbiAgICAgICAgdGhpc1twcm9wXSA9IGNvbmZpZ1twcm9wXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlRGlyZWN0aW9uU29ydCgpIHtcclxuICAgIHN3aXRjaCAodGhpcy5zb3J0RGlyZWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ2FzYyc6XHJcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gJ2Rlc2MnO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdkZXNjJzpcclxuICAgICAgICB0aGlzLnNvcnREaXJlY3Rpb24gPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhpcy5zb3J0RGlyZWN0aW9uID0gJ2FzYyc7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYXJlbnQuY2hhbmdlU29ydCh7XHJcbiAgICAgIG5hbWU6IHRoaXMuZmllbGQsXHJcbiAgICAgIHZhbHVlOiB0aGlzLnNvcnREaXJlY3Rpb25cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRmlsdGVycygpIHtcclxuICAgIHRoaXMucGFyZW50LnVwZGF0ZUZpbHRlcnMoKTtcclxuICB9XHJcblxyXG4gIGhhc0ZpbHRlclZhbHVlKCkge1xyXG4gICAgaWYgKHRoaXMuc2hvd0RhdGVGcm9tVG9GaWx0ZXIgPT09IHRydWUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyVmFsdWVGcm9tICE9PSB1bmRlZmluZWQgfHwgdGhpcy5maWx0ZXJWYWx1ZVRvICE9PSB1bmRlZmluZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5maWx0ZXJWYWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlQm9vbGVhbkZpbHRlcigpIHtcclxuICAgIGlmICh0aGlzLmZpbHRlclZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmZpbHRlclZhbHVlID0gIXRoaXMuZmlsdGVyVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51cGRhdGVGaWx0ZXJzKCk7XHJcbiAgfVxyXG5cclxuICBjbGVhckJvb2xlYW5GaWx0ZXIoKSB7XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy51cGRhdGVGaWx0ZXJzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRGaWx0ZXJWYWx1ZSgpIHtcclxuICAgIGlmICh0aGlzLnNob3dEYXRlRnJvbVRvRmlsdGVyID09PSB0cnVlKSB7XHJcbiAgICAgIGlmICh0aGlzLmZpbHRlclZhbHVlRnJvbSAmJiB0aGlzLmZpbHRlclZhbHVlVG8pIHtcclxuICAgICAgICByZXR1cm4gW3tcclxuICAgICAgICAgIG5hbWU6IGAke3RoaXMuZmllbGR9RnJvbWAsXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJWYWx1ZUZyb20udW5peCgpICogMTAwMFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIG5hbWU6IGAke3RoaXMuZmllbGR9VG9gLFxyXG4gICAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyVmFsdWVUby51bml4KCkgKiAxMDAwXHJcbiAgICAgICAgfV07XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5maWx0ZXJWYWx1ZUZyb20pIHtcclxuICAgICAgICByZXR1cm4gW3tcclxuICAgICAgICAgIG5hbWU6IGAke3RoaXMuZmllbGR9RnJvbWAsXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJWYWx1ZUZyb20udW5peCgpICogMTAwMFxyXG4gICAgICAgIH1dO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmFsdWVUbykge1xyXG4gICAgICAgIHJldHVybiBbe1xyXG4gICAgICAgICAgbmFtZTogYCR7dGhpcy5maWVsZH1Ub2AsXHJcbiAgICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJWYWx1ZVRvLnVuaXgoKSAqIDEwMDBcclxuICAgICAgICB9XTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlclZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBbe1xyXG4gICAgICAgIG5hbWU6IHRoaXMuZmllbGQsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyVmFsdWVcclxuICAgICAgfV07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgZ2V0UXVlcnlTdHJpbmcoKSB7XHJcbiAgICBpZiAodGhpcy5zaG93RGF0ZUZyb21Ub0ZpbHRlciA9PT0gdHJ1ZSkge1xyXG4gICAgICBpZiAodGhpcy5maWx0ZXJWYWx1ZUZyb20gJiYgdGhpcy5maWx0ZXJWYWx1ZVRvKSB7XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZmllbGR9RnJvbT0ke3RoaXMuZmlsdGVyVmFsdWVGcm9tLnVuaXgoKSoxMDAwfSYke3RoaXMuZmllbGR9VG89JHt0aGlzLmZpbHRlclZhbHVlVG8udW5peCgpKjEwMDB9YDtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlclZhbHVlRnJvbSkge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZpZWxkfUZyb209JHt0aGlzLmZpbHRlclZhbHVlRnJvbS51bml4KCkqMTAwMH1gO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZmlsdGVyVmFsdWVUbykge1xyXG4gICAgICAgIHJldHVybiBgJHt0aGlzLmZpZWxkfVRvPSR7dGhpcy5maWx0ZXJWYWx1ZVRvLnVuaXgoKSoxMDAwfWA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZpbHRlclZhbHVlKXtcclxuICAgICAgcmV0dXJuIGAke3RoaXMuZmllbGR9PSR7dGhpcy5maWx0ZXJWYWx1ZX1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9