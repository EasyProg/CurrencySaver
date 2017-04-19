/**
 * Created by Михаил on 23.03.2017.
 */
'use strict';
// Declare app level module which depends on views, and components
var app = angular.module('app', []);
app.controller("dateCtrl", function($scope) {
    $scope.Week = ['Mo','Th','Wn','Tu','Fr','Sa','Su'];
    $scope.Days = [];
    $scope.othMonth = false;
    $scope.isChosen = false;
    $scope.Months = [{id:0,name:'January',days:31},
                    {id:1,name:'February',days:28},
                    {id:2,name:'March',days:31},
                    {id:3,name:'April',days:30},
                    {id:4,name:'May',days:31},
                    {id:5,name:'June',days:30},
                    {id:6,name:'July',days:31},
                    {id:7,name:'August',days:31},
                    {id:8,name:'September',days:30},
                    {id:9,name:'Oktober',days:31},
                    {id:10,name:'November',days:30},
                    {id:11,name:'December',days:31}];
    $scope.selectedIndex = -1;
    $scope.selectedLeftTag = false;
    $scope.selectedRightTag = false;
    $scope.isClicked = false;
    $scope.DateObj = {
        Year:'1998',
        Month:'10',
        MonthName:'Unknown',
        Day:'30',
        countDays:30
    };
    $scope.fillDays = function(days,firstDay) {
        $scope.Days = [];
        console.log(firstDay);
        firstDay = firstDay === undefined?1:firstDay;
        $scope.othMonth = firstDay;
        for (var i = 1;i<firstDay;i++) {
            $scope.Days.push({id:i,value:'D'});
        }
        for (var i = 1;i<=days;i++){
            $scope.Days.push({id:i,value:i});
        }

    }
    //$scope.fillDays();
    $scope.tt = $scope.Days.length;
    $scope.panelCheck = function(index) {
        $scope.selectedIndex = index;
    }
    $scope.selectLeftTag = function() {
        $scope.selectedLeftTag = true;
    }
    $scope.selectRightTag = function() {
        $scope.selectedRightTag = true;
    }

    $scope.getMbyNum = function(arr,num,month,year) {
        var result = '';
        var obj = {};
        console.log(arr,num,month);
        arr.forEach(function(e) {
            if (e['id'] === num) {
                obj = e;
            }
        });
        if (num === 1) {
            obj['days'] = ((year % 400 === 0) && (year % 100 !== 0) && (year % 4 === 0)) ? 29 :28;
        }

        switch (month) {
            case "mon" : return obj['name'];
            case 'id'  : return obj['id'];
            case 'days': return obj['days'];
            //default:     console.log(mon);
        }
    };

    $scope.choose = function(index,DateObj) {
        $scope.isChosen = index;
        $scope.setDate(DateObj,index + 1,DateObj.Month);
    };
    $scope.setDate = function(DateObj,day,month) {
        var DateNow = new Date();
        var Day = day===undefined?DateNow.getDate():day;
        var l1 = Day.toString().length;
        Day  = l1.length === 1?'0'+Day:Day;
        DateObj.Year=DateNow.getFullYear();
        DateObj.Month=month===undefined?DateNow.getMonth():month;
        var FirstValueDate = new Date(DateObj.Year,DateObj.Month,1);
        var DayFirst = FirstValueDate.getDay();
        var Month = month===undefined?DateObj.Month+1:month+1;
        var MonthLength =  DateObj.Month.toString().length;
        Month = MonthLength === 2?Month:'0' + Month;
        DateObj.MonthName=$scope.getMbyNum($scope.Months,DateObj.Month,'mon');
        DateObj.Day=Day;
        DateObj.FullDate=Day+'.'+Month+'.'+DateNow.getFullYear();
        DateObj.Time=DateNow.getHours()+":"+DateNow.getMinutes()+':'+DateNow.getSeconds();
        $scope.fillDays($scope.getMbyNum($scope.Months,DateObj.Month,'days'),DayFirst);
    };
    $scope.goacrossDate = function (arr,go,DateObj) {
        var up   = DateObj.Month + 1;
        var down = DateObj.Month - 1;
        down = down === -1?11:down;
        up   = up   === arr.length?0:up;
        var Month =  DateObj.Month;
        var Year  =  DateObj.Year;
        if (go === 'prev') {
            Month = arr[down]['id'];
            Year =  DateObj.Year = down === 11?DateObj.Year-1:DateObj.Year;
            var FirstValueDate = new Date(Year,Month,1);
            var DayFirst = FirstValueDate.getDay();
            return  {
                Year:      Year,
                Month:     Month,
                MonthName: arr[down]['name'],
                Day:       DateObj.Day,
                FullDate:  DateObj.FullDate,
                countDays: $scope.fillDays($scope.getMbyNum($scope.Months,arr[down]['id'],'days'),DayFirst)
            }
        }
        if (go === 'next') {
            Month = arr[up]['id'];
            Year = up ===0?DateObj.Year+1:DateObj.Year;
            var FirstValueDate = new Date(Year,Month,1);
            var DayFirst = FirstValueDate.getDay();
            return  {
                Year:Year,
                Month:Month,
                MonthName: arr[up]['name'],
                Day:       DateObj.Day,
                FullDate:  DateObj.FullDate,
                countDays: $scope.fillDays($scope.getMbyNum($scope.Months,arr[up]['id'],'days'),DayFirst)
            }
        }

    };

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjb250cm9sbGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSDQnNC40YXQsNC40Lsgb24gMjMuMDMuMjAxNy5cclxuICovXHJcbid1c2Ugc3RyaWN0JztcclxuLy8gRGVjbGFyZSBhcHAgbGV2ZWwgbW9kdWxlIHdoaWNoIGRlcGVuZHMgb24gdmlld3MsIGFuZCBjb21wb25lbnRzXHJcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgW10pO1xyXG5hcHAuY29udHJvbGxlcihcImRhdGVDdHJsXCIsIGZ1bmN0aW9uKCRzY29wZSkge1xyXG4gICAgJHNjb3BlLldlZWsgPSBbJ01vJywnVGgnLCdXbicsJ1R1JywnRnInLCdTYScsJ1N1J107XHJcbiAgICAkc2NvcGUuRGF5cyA9IFtdO1xyXG4gICAgJHNjb3BlLm90aE1vbnRoID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuaXNDaG9zZW4gPSBmYWxzZTtcclxuICAgICRzY29wZS5Nb250aHMgPSBbe2lkOjAsbmFtZTonSmFudWFyeScsZGF5czozMX0sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjEsbmFtZTonRmVicnVhcnknLGRheXM6Mjh9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtpZDoyLG5hbWU6J01hcmNoJyxkYXlzOjMxfSxcclxuICAgICAgICAgICAgICAgICAgICB7aWQ6MyxuYW1lOidBcHJpbCcsZGF5czozMH0sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjQsbmFtZTonTWF5JyxkYXlzOjMxfSxcclxuICAgICAgICAgICAgICAgICAgICB7aWQ6NSxuYW1lOidKdW5lJyxkYXlzOjMwfSxcclxuICAgICAgICAgICAgICAgICAgICB7aWQ6NixuYW1lOidKdWx5JyxkYXlzOjMxfSxcclxuICAgICAgICAgICAgICAgICAgICB7aWQ6NyxuYW1lOidBdWd1c3QnLGRheXM6MzF9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtpZDo4LG5hbWU6J1NlcHRlbWJlcicsZGF5czozMH0sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjksbmFtZTonT2t0b2JlcicsZGF5czozMX0sXHJcbiAgICAgICAgICAgICAgICAgICAge2lkOjEwLG5hbWU6J05vdmVtYmVyJyxkYXlzOjMwfSxcclxuICAgICAgICAgICAgICAgICAgICB7aWQ6MTEsbmFtZTonRGVjZW1iZXInLGRheXM6MzF9XTtcclxuICAgICRzY29wZS5zZWxlY3RlZEluZGV4ID0gLTE7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRMZWZ0VGFnID0gZmFsc2U7XHJcbiAgICAkc2NvcGUuc2VsZWN0ZWRSaWdodFRhZyA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLmlzQ2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgJHNjb3BlLkRhdGVPYmogPSB7XHJcbiAgICAgICAgWWVhcjonMTk5OCcsXHJcbiAgICAgICAgTW9udGg6JzEwJyxcclxuICAgICAgICBNb250aE5hbWU6J1Vua25vd24nLFxyXG4gICAgICAgIERheTonMzAnLFxyXG4gICAgICAgIGNvdW50RGF5czozMFxyXG4gICAgfTtcclxuICAgICRzY29wZS5maWxsRGF5cyA9IGZ1bmN0aW9uKGRheXMsZmlyc3REYXkpIHtcclxuICAgICAgICAkc2NvcGUuRGF5cyA9IFtdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpcnN0RGF5KTtcclxuICAgICAgICBmaXJzdERheSA9IGZpcnN0RGF5ID09PSB1bmRlZmluZWQ/MTpmaXJzdERheTtcclxuICAgICAgICAkc2NvcGUub3RoTW9udGggPSBmaXJzdERheTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMTtpPGZpcnN0RGF5O2krKykge1xyXG4gICAgICAgICAgICAkc2NvcGUuRGF5cy5wdXNoKHtpZDppLHZhbHVlOidEJ30pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMTtpPD1kYXlzO2krKyl7XHJcbiAgICAgICAgICAgICRzY29wZS5EYXlzLnB1c2goe2lkOmksdmFsdWU6aX0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICAvLyRzY29wZS5maWxsRGF5cygpO1xyXG4gICAgJHNjb3BlLnR0ID0gJHNjb3BlLkRheXMubGVuZ3RoO1xyXG4gICAgJHNjb3BlLnBhbmVsQ2hlY2sgPSBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICB9XHJcbiAgICAkc2NvcGUuc2VsZWN0TGVmdFRhZyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICRzY29wZS5zZWxlY3RlZExlZnRUYWcgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgJHNjb3BlLnNlbGVjdFJpZ2h0VGFnID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJHNjb3BlLnNlbGVjdGVkUmlnaHRUYWcgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgICRzY29wZS5nZXRNYnlOdW0gPSBmdW5jdGlvbihhcnIsbnVtLG1vbnRoLHllYXIpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgdmFyIG9iaiA9IHt9O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFycixudW0sbW9udGgpO1xyXG4gICAgICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgaWYgKGVbJ2lkJ10gPT09IG51bSkge1xyXG4gICAgICAgICAgICAgICAgb2JqID0gZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChudW0gPT09IDEpIHtcclxuICAgICAgICAgICAgb2JqWydkYXlzJ10gPSAoKHllYXIgJSA0MDAgPT09IDApICYmICh5ZWFyICUgMTAwICE9PSAwKSAmJiAoeWVhciAlIDQgPT09IDApKSA/IDI5IDoyODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAobW9udGgpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm1vblwiIDogcmV0dXJuIG9ialsnbmFtZSddO1xyXG4gICAgICAgICAgICBjYXNlICdpZCcgIDogcmV0dXJuIG9ialsnaWQnXTtcclxuICAgICAgICAgICAgY2FzZSAnZGF5cyc6IHJldHVybiBvYmpbJ2RheXMnXTtcclxuICAgICAgICAgICAgLy9kZWZhdWx0OiAgICAgY29uc29sZS5sb2cobW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgICRzY29wZS5jaG9vc2UgPSBmdW5jdGlvbihpbmRleCxEYXRlT2JqKSB7XHJcbiAgICAgICAgJHNjb3BlLmlzQ2hvc2VuID0gaW5kZXg7XHJcbiAgICAgICAgJHNjb3BlLnNldERhdGUoRGF0ZU9iaixpbmRleCArIDEsRGF0ZU9iai5Nb250aCk7XHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLnNldERhdGUgPSBmdW5jdGlvbihEYXRlT2JqLGRheSxtb250aCkge1xyXG4gICAgICAgIHZhciBEYXRlTm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgRGF5ID0gZGF5PT09dW5kZWZpbmVkP0RhdGVOb3cuZ2V0RGF0ZSgpOmRheTtcclxuICAgICAgICB2YXIgbDEgPSBEYXkudG9TdHJpbmcoKS5sZW5ndGg7XHJcbiAgICAgICAgRGF5ICA9IGwxLmxlbmd0aCA9PT0gMT8nMCcrRGF5OkRheTtcclxuICAgICAgICBEYXRlT2JqLlllYXI9RGF0ZU5vdy5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIERhdGVPYmouTW9udGg9bW9udGg9PT11bmRlZmluZWQ/RGF0ZU5vdy5nZXRNb250aCgpOm1vbnRoO1xyXG4gICAgICAgIHZhciBGaXJzdFZhbHVlRGF0ZSA9IG5ldyBEYXRlKERhdGVPYmouWWVhcixEYXRlT2JqLk1vbnRoLDEpO1xyXG4gICAgICAgIHZhciBEYXlGaXJzdCA9IEZpcnN0VmFsdWVEYXRlLmdldERheSgpO1xyXG4gICAgICAgIHZhciBNb250aCA9IG1vbnRoPT09dW5kZWZpbmVkP0RhdGVPYmouTW9udGgrMTptb250aCsxO1xyXG4gICAgICAgIHZhciBNb250aExlbmd0aCA9ICBEYXRlT2JqLk1vbnRoLnRvU3RyaW5nKCkubGVuZ3RoO1xyXG4gICAgICAgIE1vbnRoID0gTW9udGhMZW5ndGggPT09IDI/TW9udGg6JzAnICsgTW9udGg7XHJcbiAgICAgICAgRGF0ZU9iai5Nb250aE5hbWU9JHNjb3BlLmdldE1ieU51bSgkc2NvcGUuTW9udGhzLERhdGVPYmouTW9udGgsJ21vbicpO1xyXG4gICAgICAgIERhdGVPYmouRGF5PURheTtcclxuICAgICAgICBEYXRlT2JqLkZ1bGxEYXRlPURheSsnLicrTW9udGgrJy4nK0RhdGVOb3cuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBEYXRlT2JqLlRpbWU9RGF0ZU5vdy5nZXRIb3VycygpK1wiOlwiK0RhdGVOb3cuZ2V0TWludXRlcygpKyc6JytEYXRlTm93LmdldFNlY29uZHMoKTtcclxuICAgICAgICAkc2NvcGUuZmlsbERheXMoJHNjb3BlLmdldE1ieU51bSgkc2NvcGUuTW9udGhzLERhdGVPYmouTW9udGgsJ2RheXMnKSxEYXlGaXJzdCk7XHJcbiAgICB9O1xyXG4gICAgJHNjb3BlLmdvYWNyb3NzRGF0ZSA9IGZ1bmN0aW9uIChhcnIsZ28sRGF0ZU9iaikge1xyXG4gICAgICAgIHZhciB1cCAgID0gRGF0ZU9iai5Nb250aCArIDE7XHJcbiAgICAgICAgdmFyIGRvd24gPSBEYXRlT2JqLk1vbnRoIC0gMTtcclxuICAgICAgICBkb3duID0gZG93biA9PT0gLTE/MTE6ZG93bjtcclxuICAgICAgICB1cCAgID0gdXAgICA9PT0gYXJyLmxlbmd0aD8wOnVwO1xyXG4gICAgICAgIHZhciBNb250aCA9ICBEYXRlT2JqLk1vbnRoO1xyXG4gICAgICAgIHZhciBZZWFyICA9ICBEYXRlT2JqLlllYXI7XHJcbiAgICAgICAgaWYgKGdvID09PSAncHJldicpIHtcclxuICAgICAgICAgICAgTW9udGggPSBhcnJbZG93bl1bJ2lkJ107XHJcbiAgICAgICAgICAgIFllYXIgPSAgRGF0ZU9iai5ZZWFyID0gZG93biA9PT0gMTE/RGF0ZU9iai5ZZWFyLTE6RGF0ZU9iai5ZZWFyO1xyXG4gICAgICAgICAgICB2YXIgRmlyc3RWYWx1ZURhdGUgPSBuZXcgRGF0ZShZZWFyLE1vbnRoLDEpO1xyXG4gICAgICAgICAgICB2YXIgRGF5Rmlyc3QgPSBGaXJzdFZhbHVlRGF0ZS5nZXREYXkoKTtcclxuICAgICAgICAgICAgcmV0dXJuICB7XHJcbiAgICAgICAgICAgICAgICBZZWFyOiAgICAgIFllYXIsXHJcbiAgICAgICAgICAgICAgICBNb250aDogICAgIE1vbnRoLFxyXG4gICAgICAgICAgICAgICAgTW9udGhOYW1lOiBhcnJbZG93bl1bJ25hbWUnXSxcclxuICAgICAgICAgICAgICAgIERheTogICAgICAgRGF0ZU9iai5EYXksXHJcbiAgICAgICAgICAgICAgICBGdWxsRGF0ZTogIERhdGVPYmouRnVsbERhdGUsXHJcbiAgICAgICAgICAgICAgICBjb3VudERheXM6ICRzY29wZS5maWxsRGF5cygkc2NvcGUuZ2V0TWJ5TnVtKCRzY29wZS5Nb250aHMsYXJyW2Rvd25dWydpZCddLCdkYXlzJyksRGF5Rmlyc3QpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdvID09PSAnbmV4dCcpIHtcclxuICAgICAgICAgICAgTW9udGggPSBhcnJbdXBdWydpZCddO1xyXG4gICAgICAgICAgICBZZWFyID0gdXAgPT09MD9EYXRlT2JqLlllYXIrMTpEYXRlT2JqLlllYXI7XHJcbiAgICAgICAgICAgIHZhciBGaXJzdFZhbHVlRGF0ZSA9IG5ldyBEYXRlKFllYXIsTW9udGgsMSk7XHJcbiAgICAgICAgICAgIHZhciBEYXlGaXJzdCA9IEZpcnN0VmFsdWVEYXRlLmdldERheSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gIHtcclxuICAgICAgICAgICAgICAgIFllYXI6WWVhcixcclxuICAgICAgICAgICAgICAgIE1vbnRoOk1vbnRoLFxyXG4gICAgICAgICAgICAgICAgTW9udGhOYW1lOiBhcnJbdXBdWyduYW1lJ10sXHJcbiAgICAgICAgICAgICAgICBEYXk6ICAgICAgIERhdGVPYmouRGF5LFxyXG4gICAgICAgICAgICAgICAgRnVsbERhdGU6ICBEYXRlT2JqLkZ1bGxEYXRlLFxyXG4gICAgICAgICAgICAgICAgY291bnREYXlzOiAkc2NvcGUuZmlsbERheXMoJHNjb3BlLmdldE1ieU51bSgkc2NvcGUuTW9udGhzLGFyclt1cF1bJ2lkJ10sJ2RheXMnKSxEYXlGaXJzdClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxufSk7Il0sImZpbGUiOiJjb250cm9sbGVycy5qcyJ9
