package main;

import java.util.Scanner;

import excepcionCustom.SueldoException;
import model.Desarrollador;
import model.Empresa;
import model.JefeGrupo;

public class Main {
	static Scanner teclado = new Scanner(System.in);
	
	private final static String MENU = "1. Añadir Jefe de Grupo: \n"+"2. Añadir Desarrollador: \n"+"3. Lista de empleados: \n"+"4. Ordenar por sueldo"+"5. Salir";
	
	public static void main(String[] args) {
		
		GUI();
	}
	
	public static void GUI() {
		Empresa empresa = new Empresa("Mairena");
		String nombre = "";
		String dni = "";
		String localidad = "";
		double sueldo = 0;
		
		int opcion = 0;
		while(opcion !=5) {
			System.out.println(MENU);
			System.out.println("Indique una opción del menu: ");
			opcion = Integer.parseInt(teclado.nextLine());
			
			switch(opcion) {
			case 1:
				System.out.println("Indique nombre: ");
				nombre = teclado.nextLine();
				System.out.println("Indique dni: ");
				dni = teclado.nextLine();
				System.out.println("Indique localidad: ");
				localidad = teclado.nextLine();
				System.out.println("Indique sueldo: ");
				sueldo = Integer.parseInt(teclado.nextLine());
				
				try {
					empresa.addEmpleado(new JefeGrupo(nombre, dni, localidad, sueldo));
				} catch (SueldoException e) {
					System.out.println(e.getMessage());
				}
				break;
			case 2:
				System.out.println("Indique nombre: ");
				nombre = teclado.nextLine();
				System.out.println("Indique dni: ");
				dni = teclado.nextLine();
				System.out.println("Indique localidad: ");
				localidad = teclado.nextLine();
				System.out.println("Indique sueldo: ");
				sueldo = Integer.parseInt(teclado.nextLine());
				try {
					empresa.addEmpleado(new Desarrollador(nombre, dni, localidad, sueldo));
				} catch (SueldoException e) {
					System.out.println(e.getMessage());
				}
				break;
			case 3:
				System.out.println(empresa.toString());
				break;
			case 4:
				System.out.println(empresa.ordenarEmpleadoSueldo());
				break;
			}
		}
	}

}
