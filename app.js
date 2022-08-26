var h = null;
var m = null;
var s = null;

var timeout = null;

function start()
{
    // Lấy giá trị ban đầu 
    if(h === null)
    {
        h = parseInt(document.getElementById('h_val').value);
        m = parseInt(document.getElementById('m_val').value);
        s = parseInt(document.getElementById('s_val').value);
    }
    // Chuyển đổi dữ liệu
    if (s === -1)
    {
        m -= 1;
        s = 59;
    }
    if(m === -1)
    {
        h -= 1;
        m = 59;
    }
    if(h === -1)
    {
         clearTimeout(timeout);
         alert('Hết giờ');
         return false;
    }
    // Hiển thị đồng hồ
    document.getElementById('h').innerHTML = h.toString();
    document.getElementById('m').innerHTML = m.toString();
    document.getElementById('s').innerHTML = s.toString();
    
    timeout = setTimeout(() => 
    {
        s--;
        start();
    },1000);

}
function stop()
{
    // Xóa bộ hẹn giờ 
    clearTimeout(timeout);
}