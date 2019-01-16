import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Workbook;

import java.io.FileOutputStream;
import java.io.OutputStream;

public class Base {
    public static void main(String[] args) {
        System.out.println("Hello World Madhava ");
        Workbook wb=new HSSFWorkbook();
        try(OutputStream fileout=new FileOutputStream("workbook.xls")){
            wb.write(fileout);
        }catch (Exception e){
            e.printStackTrace();

        }
    }

}
