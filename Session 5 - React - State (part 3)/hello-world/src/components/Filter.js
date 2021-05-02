const Filter = (props) => {
    return (
        <div>
            <div>Filter by year</div>
            <select value={props.year} onChange={(e) => props.onChangeYear(+e.target.value)}> 
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
    );
};

export default Filter;

//e.target.value kia là bắt lấy giá trị ở value với kiểu dữ liệu là string, muốn convert sang number
//ta thêm +e.target.value