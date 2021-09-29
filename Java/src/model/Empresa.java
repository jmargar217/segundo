package model;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Empresa {
	private String nombre;
	private List<AbstractEmpleado>empleados;
	
	public Empresa(String nombre) {
		super();
		this.empleados = new ArrayList<AbstractEmpleado>();
		this.nombre = nombre;
	}
	
	
	// Al utilizar ArrayList debo comprobar que no se meten valores repetidos
	public void addEmpleado(AbstractEmpleado emp) {
		if(!this.empleados.contains(emp)) {
			this.empleados.add(emp);
		}
	}
	
	// Ordena la lista de empleados por sueldo de manera decreciente
	public String ordenarEmpleadoSueldo() {
		StringBuilder sb = new StringBuilder();
		
		Collections.sort(this.empleados, new CompararSueldo());
		
		for(AbstractEmpleado emp:this.empleados) {
			sb.append("Nombre: "+emp.getNombre()+", Sueldo: "+emp.getSueldo()+"\n");
		}
		
		return sb.toString();
	}

	public String getNombre() {
		return nombre;
	}

	// Lista todos los empleados de la empresa
	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		
		for (AbstractEmpleado emp : empleados) {
			sb.append(emp.getNombre()+"\n");
		}
		
		return sb.toString();
	}
	

}
